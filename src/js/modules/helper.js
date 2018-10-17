function extend(ChildClass, ParentClass) {
    ChildClass.prototype = new ParentClass();
    ChildClass.prototype.constructor = ChildClass;
}

function mixin(target, ...sources) {
    Object.assign(target , ...sources);
}

export default { extend, mixin };