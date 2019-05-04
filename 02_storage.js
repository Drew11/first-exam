'use script';

function storage() {

    return {
        setValue: function(props, val){
            this[props] =  val;
        },
        getValue: function (val) {
            console.log(this[val])
        }
    }
}

const propsStorage = storage();
propsStorage.setValue('name', 'Peter');
propsStorage.getValue('age');
propsStorage.getValue('name');
propsStorage.setValue('age', 30);
propsStorage.getValue('age');
propsStorage.setValue('name','Andrey');
console.log(propsStorage );