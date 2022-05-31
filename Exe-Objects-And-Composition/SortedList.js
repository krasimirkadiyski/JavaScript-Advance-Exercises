function createSortedList(){
    return {
        repo: [],
        size: 0,
        add(element){
            this.repo.push(element);
            this.repo.sort((a,b) =>{
                return a - b;
            });
            this.size++;
        },
        get(index){
            if(index < this.repo.length && index >= 0){
           return this.repo[index];
        }else{
            throw 'out of bounds'
        }
        },
        remove(index){
            if(index < this.repo.length && index >= 0){
            this.repo.splice(index,1);
            this.repo.sort((a,b) =>{
                return a - b;
            });
            this.size--;
        }else{
            throw 'out of bounds'
        }
        },

    }
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(0)); 


