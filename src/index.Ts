function minLength(length : number){
    return (target:any, key:string) =>{
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if(value.length < length)
            {
                throw new Error(`tamanho menor do que ${length}`);
            }else{
                _value = value
            }
        };

        Object.defineProperty(target,key,{
            get: getter,
            set : setter,
        });

    }

}


class Api {
    @minLength(3)
    name : string;

    constructor(name: string){
        this.name = name;
    }
}

const api = new Api("daidbsa");
console.log(api.name);
