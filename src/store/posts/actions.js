import { ssrContextKey } from "vue"
import { getDatabase, ref, set, update, child, runTransaction } from "firebase/database";
import posts from ".";

function generateUUID() {
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
    }
    var newGuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });

    return newGuid;
}

export default {

    CreatePost(context, data) {
        /*    data.date = Date.now(); */
        data.id = generateUUID();
        const db = getDatabase();
        set(ref(db, '/posts/' + data.id), data);
    },

    updatePost(context, data) {
        const updates = {};
        updates['/posts/' + data.id] = data;
        const db = getDatabase();
        return update(ref(db), updates);
    },

    deletePost(context, id) {
        const updates = {};
        updates['/posts/' + id] = null;
        const db = getDatabase();
        return update(ref(db), updates);
    },
    IncreaseCount(context, id) {
        const updates = {};
        const SearchPost = context.state.posts.find(posts => posts.id === id);
        const newCount = SearchPost.count + 1;
        updates['/posts/' + id + '/count'] = newCount;

        const db = getDatabase();
        return update(ref(db), updates);
    },
    DecreaseCount(context, id) {
        const updates = {};
        const SearchPost = context.state.posts.find(posts => posts.id === id);
        const newCount = SearchPost.count - 1;
        updates['/posts/' + id + '/count'] = newCount;

        const db = getDatabase();
        return update(ref(db), updates);
    },
    CreateLike(context, data) {
        const updates = {};
        updates['/posts/' + data.likeId + '/likes/' + data.uid] = true;
        const db = getDatabase();
        return update(ref(db), updates);
    },
}
        // Функция были для получения json и его парсинга
/*     LoadPosts(context, data) {
        if (!context.state.initLoad || data.force) {
            context.state.initLoad = true;
            fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
                .then(response => response.json())
                .then((json) => context.state.posts = context.state.posts.concat(json))
        }
    }, */
        //Эта функция была для добавления поста в json
/*     CreatePost(context, title, url, id) {
        fetch('https://jsonplaceholder.typicode.com/albums/', {
            method: 'POST',
            body: JSON.stringify(title, url, id),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then((json) => context.commit('AddPost', json));
    } */


