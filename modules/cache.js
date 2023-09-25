

const data = new Map();
function map(){
  return data
}

function set(key, value) {
  data.set(key, value);
}

function get(key) {
  return data.get(key);
}

function has(key) {
  return data.has(key);
}

function remove(key) {
  data.delete(key);
}

function clear() {
  data.clear();
}

function size(){
    return data.size
}

function all(){
  return Array.from(data, ([key, value]) => ({ [key]: value }));
}

function obj(){
  // {..data}
  return Array.from(data, ([key, value]) => ({ [key]: value }));
}

function keys() {
    return Array.from(data.keys());
}

function values() {
  return Array.from(data.values());
}
function entries() {
  return Array.from(data.entries());
}

function forEach(callback) {
  data.forEach((value, key) => {
    callback(value, key);
  });
}

function isNull(key) {
  const value = data.get(key);
  return value === null || value === undefined;
}

function update(key, value) {
  if (data.has(key)) {
    data.set(key, value);
    return true;
  }
  return false;
}

function prefix(prefix) {
  return Array.from(data.keys()).filter(key => key.startsWith(prefix));
}

function isEmpty() {
  return data.size === 0;
}


function type(key) {
  // Returns the type of the value associated with the key
  const value = data.get(key);
  if (value === null || value === undefined) {
    return 'null';
  }
  if (Array.isArray(value)) {
    return 'array';
  }
  return typeof value;
}


function deleteAll(keys) {
  // Deletes all the keys from the map
  keys.forEach(key => {
    data.delete(key);
  });
}


function expire(key, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      data.delete(key);
      resolve();
    }, time);
  });
}

const object = {
  set: (key, value) => {
    data.set(key,JSON.stringify(value))
  },
  get: (key) => {
    return JSON.parse(data.get(key))
  }
}

module.exports = {
  set,
  get,
  has,
  remove,
  clear,
  size,
  all,
  keys,
  values,
  entries,
  forEach,
  update,
  prefix,
  isNull,
  isEmpty,
  expire,
  object,
  map,
  obj,
  type,
  deleteAll,
  del: remove,
};


class CacheDB{
  constructor(){
    const data = new Map();
    this.data = data;
  }

 map(){
  return this.data
}

 set(key, value) {
  this.data.set(key, value);
}

 get(key) {
  return this.data.get(key);
}

 has(key) {
  return this.data.has(key);
}

 remove(key) {
  this.data.delete(key);
}

 clear() {
  this.data.clear();
}

 size(){
    return this.data.size
}

 all(){
  return Array.from(this.data, ([key, value]) => ({ [key]: value }));
}

 obj(){
  // {..data}
  return Array.from(this.data, ([key, value]) => ({ [key]: value }));
}

 keys() {
    return Array.from(this.data.keys());
}

 values() {
  return Array.from(this.data.values());
}
 entries() {
  return Array.from(this.data.entries());
}

 forEach(callback) {
  this.data.forEach((value, key) => {
    callback(value, key);
  });
}

 isNull(key) {
  const value = this.data.get(key);
  return value === null || value === undefined;
}

 update(key, value) {
  if (data.has(key)) {
    data.set(key, value);
    return this.true;
  }
  return this.false;
}

 prefix(prefix) {
  return Array.from(this.data.keys()).filter(key => key.startsWith(prefix));
}

  isEmpty() {
  return this.data.size === 0;
  }


  type(key) {
  // Returns the type of the value associated with the key
  const value = this.data.get(key);
  if (value === null || value === undefined) {
    return 'null';
  }
  if (Array.isArray(value)) {
    return 'array';
  }
  return typeof value;
}


  deleteKeys(keys) {
  // Deletes all the keys from the map
  keys.forEach(key => {
    this.data.delete(key);
  });
}

  deleteAll(){
    this.data.clear
  }


expire(key, time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      this.data.delete(key);
      resolve();
    }, time);
  });
}

object = {
  set: (key, value) => {
    this.data.set(key,JSON.stringify(value))
  },
  get: (key) => {
    return JSON.parse(this.data.get(key))
  }
}
}

module.exports.CacheDB = CacheDB