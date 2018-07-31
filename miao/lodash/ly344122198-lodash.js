
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
	/**
	 * [fill description]
	 * @param  {[type]} ary  [description]
	 * @param  {[type]} val  [description]
	 * @param  {[type]} star [description]
	 * @param  {[type]} end  [description]
	 * @return {[type]}      [description]
	 */
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
	/**
	 * [indexOf description]
	 * @param  {[type]} ary       [description]
	 * @param  {[type]} val       [description]
	 * @param  {[type]} formIndex [description]
	 * @return {[type]}           [description]
	 */
	indexOf: function(ary, val, formIndex){
		formIndex = formIndex || 0
		for (var i = formIndex; i < ary.length; i++) {
			if (ary[i] == val) return i
		}
		return -1
	},

	lastIndexOf: function(ary, val, formIndex){
		if (formIndex < 0) return -1
		formIndex = formIndex || 0
		for (var i = ary.length - formIndex; i > 0; i--) {
			if (ary[i] == val) return i
		}
		return -1
	},

	join: function(ary, sepeartry = ',') {
    	var str = '';
    	for (var i = 0; i < ary.length - 1; i++) {
        	str += ary[i] + ('' + sepeartry);
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

	uniq: function(ary) {
		return Array.from(new set(ary))
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

	isEqual: function(objOne, objTwo) {
		if (objOne === objTwo) return true
		if (objOne !== objOne && objTwo !== ovjTwo) return true 
		if (Array.isArray(objOne) && Array.isArray(objTwo)) {
			var l = Math.max(objOne.length, objTwo.length)
			for (var i = 0; i < max; i++) {
				if (!ly344122198.isEqual(objOne[i], objTwo[i])) return false
			}
			return true
		}
		if (typeof objOne === 'object' && typeof objTwo === 'object') {
			var propNames = []
			for (var key in objOne) propNames.push(key)
			for (var key in objTwo) propNames.push(key)
			propNames = ly344122198.uniq(propNames)
			for (var key of propNames) {
				if (!y344122198.isEqual(objOne[key], objTwo[key])) return false
			}
			return true
		}
		return objOne === objTwo
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
		var sum = 0
		for (var i = 0; i < ary.length; i++) {
			sum += iteratee(ary[i])
		}
		return sum
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

	keys: function(object) {
		return Object.keys(object)
	},

	matchesProperty: function(pairs) {
		return matches(fromPairs(pairs))
	}



}