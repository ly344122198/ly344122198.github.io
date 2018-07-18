
var ly344122198 = {
	/**
	 * [chunk description]
	 * @param  {[type]} array [description]
	 * @param  {[type]} size  [description]
	 * @return {[type]}       [description]
	 */
	chunk: function(array,size) {
			size = 1 || size
			var arr = [ ]
			for (var i = 0; i < array.length; i += size) {
				arr.push(array.slice(i , i + size))
			}	
			return arr
			},

	compact: function(array){
			
	}

	difference: function(){

	}

	flatten: function(ary) {
		return ary.reduce((result, item) => {
			if(Array.isArray(item)) {
				for (var i = 0; i < item.length; i++) {
					result.push(item[i])
				}
			} else {
				result.push(item)
			}
			return result
		}, [ ])
	}

	flattenDeep: function(ary) {
		var result = [ ]
		for (var i = 0; i < ary.length; i++) {
			if(Array.isArray(ary[i])) {
				var tmp = flattenDeep(arr[i])
				result = [...result, ...ary[i]]
			} else {
				result.push(ary[i])
			}
		}
		return result
	}

	flattenDepth: function(ary, depth) {
		if (depth === 0) {
			return [...ary]
		}
		var result = [ ]
		for (var i = 0; i < ary.length; i++) {
			if(Array.isArray(ary[i])) {
				var tmp = flattenDepth(arr[i], depth - 1)
				result = [...result, ...ary[i]]
			} else {
				result.push(ary[i])
			}
		}
		return result
	}

	forEach: function(ary, iterator) {
		for (var i = 0; i < ary.length; i++) {
			if (iterator(ary[i], i, ary) === false) {
				break
			}
		}
		return
	}

	filter: function(ary, test) {
		var result = [ ]
		for (var i = 0; i < ary.length; i++) {
			if (test(ary[i])) {
				result.push(ary[i])
			}
		}
		return result
	}

	map: function(){

	}

	reduce: function(ary, reducer, initialValue) {
		var prev = initialValue
		for (var i = 0; i < ary.length; i++) {
			prev = reducer(initialValue, arr[i])
		}
		return prev
	}

	sum: function(ary) {
		var sum = 0
		for (var i = 0; i < ary.length; i++) {
			sum += ary[i]
		}
		return sum
	}

	sumby: function(ary, iteratee) {
		var result
		for (var i = 0; i < ary.length; i++) {
			result += iteratee(ary[i])
		}
		return result
	}

	identity: function(v) {
		return v
	}

	property: function(propName) {
		return function(obj){
			return obj[propName]
		}
	}

	matches: function(src) {
		return function(obj) {
			for (var key in obj) {
				if (src[key] !== obj[key]) {
					// isSubset  判断是否为子集
					if (!isSubset(src[key], obj[key])) {
						return false
					} else if (src[key] !== obj[key]) {
						return false
					}
				}
			}
			return true
		}
	}




























	matchesProperty: function(pairs) {
		return matches(fromPairs(pairs))
	}



}