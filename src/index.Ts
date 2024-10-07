function apiVersion(version:string)
{
    return (target:any) => {
        Object.assign(target.prototype, { __version:version });
    };
}

@apiVersion("1.10")
class Api {}

const api = new Api();
console.log(api.__version);
