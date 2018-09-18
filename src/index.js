module.exports = function check(str, bracketsConfig) {
    // your solution

    class Search {
        constructor(str, config) {
            this.arr = [];
            this.str = str.split('');
            this.config = config;
        }


        matchSearch() {
            const {str, arr, config} = this;

            if(str.length % 2 !== 0) {
                return false;
            }
            
            str.forEach(el => {
                config.forEach(conf => {
                    if (conf[1] === el && conf[0] === arr[arr.length - 1])
                        arr.pop();
                    else if (conf[0] === el) {
                        arr.push(el);
                    }
                });
            });

            return !arr.length;
        }
    }
    

    let search = new Search(str, bracketsConfig);

    return search.matchSearch();
};