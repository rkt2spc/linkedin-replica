/**
 * Created by nmtuan on 09-May-16.
 */

FirebaseAdapter = {
    rootRef : null,
    
    setup : function (ref) {
        this.rootRef = new Firebase(ref);
    },
    
    bind : function (relativeRef, callback) {
        var ref = (relativeRef != null)? this.rootRef.child(relativeRef) : this.rootRef;

        ref.on('value', callback);
    },

    set : function (relativeRef, value) {
        var ref = (relativeRef != null)? this.rootRef.child(relativeRef) : this.rootRef;

        ref.set(value);
    },
    
    signIn : function (userName, password, callback) {
        this.rootRef.authWithPassword({
            email: userName,
            password: password
        }, callback, {
            remember: "sessionOnly"
        });
    },
    
    signUp : function (userName, password, callback) {
        this.rootRef.createUser({
            email: userName,
            password: password
        }, callback);
    }
}

FirebaseAdapter.setup('https://1312663webmidterm.firebaseio.com/user');