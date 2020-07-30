class User{
    constructor(){
        this.name=null;
        this.answers=[];
        this.index=[];
    }
    update(){
        var userIndex="users/user"+this.index;
        database.ref(userIndex).set({
            name:this.name,
            answer:this.answers

        });
    }
    updateCount(count){
        database.ref('/').update({
            userCount:count
        });
    }

    

}