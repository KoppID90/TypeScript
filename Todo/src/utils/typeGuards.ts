export namespace utils {

    export function isString(value: any): value is string {
        return typeof value === 'string';
    }

}