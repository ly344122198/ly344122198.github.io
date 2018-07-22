
var ly344122198 = {
	/**
	 * [chunk description]
	 * @param  {[type]} array [description]
	 * @param  {[type]} size  [description]
	 * @return {[type]}       [description]
	 */
	chunk: function(array,size) {
			size = size || 1
			var ary = [ ]
			for (var i = 0; i < array.length; i += size) {
				ary.push(array.slice(i , i + size))
			}	
			return ary
			},

	compact: function(array){
			
	},

	difference: function(ary){

	},

	fill : function(ary, val, star, end){
		star = star || 0
		end = end || ary.length
		if (end > ary.length) {
			end = ary.length
		}
		for (var i = star; i < end; i++) {
			ary[i] = val
		}
		return ary
	},

	find: function(){

	},

	indexOf: function(ary, val, formIndex){
		formIndex = formIndex || 0
		for (var i = formIndex; i < ary.length; i++) {
			if (ary[i] == val) return i
		}
		return -1
	},

	lastIndexOf: function(ary, val, formIndex){
		formIndex = formIndex || 0
		for (var i = ary.length - formIndex; i > 0; i--) {
			if (ary[i] == val) return i
		}
		return -1
	},

	join: function(ary, sepeartry = ',') {
    	var str = '';
    	for (var i = 0; i < ary.length - 1; i++) {
        	str += ary[i] + ('' + separator);
    	}
    	str += ary[ary.length - 1];
    		return str
	},

	reverse: function(ary) {
    	var newAry = []
    	for (var i = ary.length - 1; i >= 0; i--) {
        	newAry.push(ary[i])
    	}
    	return newAry
	},

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
	},

	flattenDeep: function(ary) {
		var result = [ ]
		for (var i = 0; i < ary.length; i++) {
			if(Array.isArray(ary[i])) {
				var tmp = ly344122198.flattenDeep(ary[i])
				result = [...result, ...tmp]
			} else {
				result.push(ary[i])
			}
		}
		return result
	},

	flattenDepth: function(ary, depth) {
		if (depth === 0) {
			return [...ary]
		}
		var result = [ ]
		for (var i = 0; i < ary.length; i++) {
			if(Array.isArray(ary[i])) {
				var tmp = ly344122198.flattenDepth(ary[i], depth - 1)
				result = [...result, ...tmp]
			} else {
				result.push(ary[i])
			}
		}
		return result
	},

	forEach: function(ary, iterator) {
		for (var i = 0; i < ary.length; i++) {
			if (iterator(ary[i], i, ary) === false) {
				break
			}
		}
		return ary
	},

	groupBy: function(ary,prop) {
		var map = {}
		for (var item of map) {
			if (item[prop] in map) {
				map[item[prop]].push(item)
			} else {
				map[item[prop]] = [item]
			}
		}
		return map
	},

	filter: function(ary, test) {
		var result = [ ]
		if (typeof test === 'function') {
			for (var i = 0; i < ary.length; i++) {
				if (test(ary[i])) {
					result.push(ary[i])
				}
			}
		} else {
			for (var i = 0; i < ary.length; i++) {
				if (ary[i].test) {
					result.push(ary[i])
				}
			}
		}
		return result
	},

	map: function(ary){

	},

	reduce: function(ary, reducer, initialValue) {
		initialValue = initialValue || 0
		var prev = initialValue
		for (var i = 0; i < ary.length; i++) {
			prev = reducer(initialValue, ary[i])
			initialValue = prev
		}
		return prev
	},

	sum: function(ary) {
		var sum = 0
		for (var i = 0; i < ary.length; i++) {
			sum += ary[i]
		}
		return sum
	},

	sumby: function(ary, iteratee) {
		var result
		for (var i = 0; i < ary.length; i++) {
			result += iteratee(ary[i])
		}
		return result
	},

	identity: function(v) {
		return v
	},

	property: function(propName) {
		return function(obj){
			return obj[propName]
		}
	},

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
	},


	matchesProperty: function(pairs) {
		return matches(fromPairs(pairs))
	}



}