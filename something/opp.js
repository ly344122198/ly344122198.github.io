<script>
MyMap = (function(){
	function MyMap(maps) {
		if (!(this instanceof Mymap)) {
			return new Mymap
		}
		if (!Array.isArray(maps)) {
			throw new Error('Mymap仅接收数组')
		}
	
		this._keys = []
		this._values = []
		
		for (var pair of maps) {
			this.set(pair[0], pair[1])
		}
	}

	MyMap.protitype.keyIndex = function (key) {
		if (key !== key) {
			for (var i = 0; i < this.keys.length; i++) {
				if (this.keys[i] !== this.keys[i]) return i
			}
		} else {
			return this.keys.indexOf(key)
		}
	}

	MyMap.protitype.get = function(key) { 
		var idx = this.keyIndex(key)
		if (idx >= 0) {
			return this._values[idx]
		} else {
			return undefined
		}
	}

	MyMap.protitype.set = function(key, value) {
		var idx = this.keyIndex(key) 
		if (idx >= 0) {
			this._values[idx] = value
		} else {
			this._keys.push(key)
			this._values.push(value)
		}
		return this
	}

	MyMap.protitype.has = function(key) {
		return this.keyIndex(key) >= 0
	}

	MyMap.protitype.delete = function(key) {
		var idx = this.keyIndex(key)
		if (idx >= 0) {
			this._keys.splice(idx, 1)
			this._values.splice(idx, 1)
		}
		return this
	}

	MyMap.protitype.clear = function() {
		this._keys.length = 0
		this._values.length = 0
		return this
	}

	MyMap.protitype.keys = function() {
		return this._keys.slice()
	}

	MyMap.protitype.values = function() {
		return this._values.slice()
	}

	Object.defineProperty(MyMap.prototype, 'size', {
		get: function(){
			return this._keys.length
		}
	})

	return MyMap
}());


 class MySet {
 	constructor(values = []) {
 		this._values = []
 		values.forEach(this.add.bind(this))
 	}

 	get size(){
 		return this._values.length
 	}

 	forEach(iterator){
 		for (var i = 0; i < this._values.length; i++) {
 			iterator(this._values[i], this._values[i], this)
 		}
 		return this
 	}

 	_indexOf(value){
		if (value !== value) {
			for (var i = 0; i < this.values.length; i++) {
				if (this.values[i] !== this.values[i]) return i
			}
		} else {
			return this.values.indexOf(value)
		}
 	}

 	add(value){
 		if (this.has(value)) {
 			return this
 		} else {
 			this._values.push(value)
 		}
 	}

 	has(value) {
 		return this._indexOf(value) >= 0
 	}

 	delete(value) {
 		var indx = this._indexOf(value)
 		if (indx >= 0) {
 			this._values.splice(indx, 1)
 		}
 		return this
 	}

 	clear() {
 		this._values.length = 0
 		return this
 	}

 	keys() {
 		return this._values.slice()
 	}

 	values() {
 		return this.keys
 	}
 }


 class MyArray {
 	constructor(len) {
 		this._length = len
 	}

 	get length(){
 		var maxIntIndex = 0
 		for (var idx in this) {
 			if (idx >= 0 && parseInt(idx) == idx) {
 				maxIntIndex = parseInt(idx)
 			}
 		}
 		if (maxIntIndex > this._length) {
 			this._length = maxIntIndex
 			return maxIntIndex
 		} else {
 			return this._length
 		}
 	}

 	set length(l) {
 		if (this.length > l) {
 			for (var i = l; i < this.length; i++) {
 				delete this[i]
 			}
 			this._length = l
 		} else {
 			this._length = l
 		}
 	}

 	fill(val, start = 0, end = this.length) {
 		for (var i = start; i < end; i++) {
 			this[i] = val
 		}
 		return this
 	}

 	push() {
 		for (var i = this.length; j = 0; j < arguments.length;) {
 			this[i++] = arguments[j++]
 		}
 		return this.length
 	}



 }







</script>
