const Generator = require('yeoman-generator');
const babylon = require('babylon');
const traverse = require('babel-traverse').default;
const t = require('babel-types');
const generate = require('babel-generator').default;



module.exports = class extends Generator {
    prompting() {
        // Give a name to your reducer and what not.
    }

    writing() {
        const source = this.fs.read(this.destinationPath('src/reducers.js'));
        // SourceType tells babylon to treat the source as a module and allow things like imports
        const ast = babylon.parse(source, { sourceType: 'module' });


        // Remember the last ImportDeclaration node
        let lastImport = null;

        // Create a new import declaration. You can also create a factory function for that.
        let name = 'UserRoutes'
        const declaration = t.importDeclaration(
            // [t.importSpecifier(t.identifier(`${name}`), t.identifier(`${name}`))], // This is the imported name
            [t.importDefaultSpecifier(t.identifier(`${name}`))], // This is the imported name
            t.stringLiteral(`./${name}`), // This is the path to the source
        );

        const appUseImport = t.expressionStatement(
            t.callExpression(
                t.memberExpression(t.identifier('app'), t.identifier('use')),
                [
                    t.stringLiteral(`/api/users`),
                    t.identifier(`${name}`)
                ]
            )
        )

        traverse(ast, {
            Program(path) {
                lastImport = path.get('body').filter(p => p.isImportDeclaration()).pop();
                if (lastImport) {
                    lastImport.insertAfter(declaration);
                }
                // Get routesFunction
                let fnDeclarations = path.get('body').filter(p => p.isFunctionDeclaration());
                let routesFnNode = fnDeclarations.filter(fn => {
                    return fn.get('id').parent.id.name === 'routes';
                });
                let routesFn = routesFnNode[0];

                if (routesFn.get('body').type === 'BlockStatement') {
                    let blockStatementBody = routesFn.get('body').parent.body.body;
                    blockStatementBody.push(appUseImport);
                }


            }
        })


        const { code } = generate(ast, { /* Options */ }, source);
        this.fs.delete(this.destinationPath('src/reducers.js'));
        this.fs.write(this.destinationPath('src/reducers.js'), code);

    }
}