<% if (hasModel == true) { %>import <%= modelNameCapitalized %> from '../models/<%= modelName %>'; <% } %>



/** @Models
 * 
 */



export let services = {
    all() {
        /** */
        <% if (hasModel == false) { %> return Promise.resolve([1, 2, 3]); <% } %>
        <% if (hasModel == true) { %> return <%= modelNameCapitalized %>.find({}); <% } %>

    }


}

export default services;