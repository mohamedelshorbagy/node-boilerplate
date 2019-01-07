<% if (hasModel == true) { %> import <%= modelNameCapitalized %> from '../models/<%= modelName %>'; <% } %>



export const services = { 
    all() {
    /* insert your interaction & logic with db here */
        <% if (hasModel == false) { %> return Promise.resolve([1, 2, 3]); <% } %>
        <% if (hasModel == true) { %> return <%= modelNameCapitalized %>.find({}); <% } %>
    }
}
