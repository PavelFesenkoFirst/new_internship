//task_1
Array.prototype.value_chars = function (name) {
    return this.map((el) => el[name]);
}

//task_3
Array.prototype.group_separate = function (separator) {
    return this
        .map(
            (item, index) =>
                index % separator == 0 && this.slice(index, index + separator)
        )
        .filter((item) => item);
}

//task_4
Array.prototype.del_negativ = function () {
    return this.filter(function (some) {
        return !!some;
    });
}

//task_5
Array.prototype.concat_array = function (...param) {

    return this.concat(param.reduce((acc, item) => acc.concat(item), []));
}

//task_6
Array.prototype.my_slise = function (value = 1) {
    return (newList = value > this.length ? [] : this.slice(value));
}

//task_8
Array.prototype.change_list = function (symb, start = 0, stop = this.length) {
    for (let i = start; i < stop; i++) {
        this[i] = symb;
    }
    return this;
}

//task_10
Array.prototype.dublicate = function () {
    return this.filter(
        (element, index, arr) =>
            arr.indexOf(element) === index && arr.lastIndexOf(element) !== index
    );
}

//task_11
Array.prototype.get_elem_array = function ( param) {
    return (newList = param > 0 ? this[param] : this.reverse()[param * -1]);
}

//task_13
Array.prototype.element_arrays = function (list2, list3) {
    let some_list = [];

    for (let i = 0; i < list2.length; i++) {
        some_list.push([this[i], list2[i], list3[i]]);
    }

    return some_list;
}
//task_14
Array.prototype.my_join = function (param) {
    return this.join(param);
}

//task_17
Array.prototype.my_random = function () {
    return this.sort(() => 0.5 - Math.random());
}

//task_18
Array.prototype.diference = function (list2) {
    return this
        .filter((value) => list2.indexOf(value) == -1)
        .concat(list2.filter((value) => this.indexOf(value) == -1));
}

//task_20
Array.prototype.reiteration = function () {

    return this
        .sort(
            (a, b) =>
                this.filter((v) => v === a).length -
                this.filter((v) => v === b).length
        )
        .pop();
}

module.exports = Array.prototype.value_chars;
module.exports = Array.prototype.group_separate;
module.exports = Array.prototype.del_negativ;
module.exports = Array.prototype.concat_array;
module.exports = Array.prototype.my_slise;
module.exports = Array.prototype.change_list;
module.exports = Array.prototype.dublicate;
module.exports = Array.prototype.get_elem_array;
module.exports = Array.prototype.element_arrays;
module.exports = Array.prototype.my_random;
module.exports = Array.prototype.diference;
module.exports = Array.prototype.my_join;
module.exports = Array.prototype.reiteration;