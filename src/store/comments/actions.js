import { getDatabase, ref, set, update, child } from "firebase/database";

export default {
    CreateComment(context, data) {
        const updates = {};
        updates['/comments/id:' + data.id ] = data;

        const db = getDatabase();
        return update(ref(db), updates);
    },
}

/* LoadComments(context) {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then((json) => context.state.comments = context.state.comments.concat(json))
}, */