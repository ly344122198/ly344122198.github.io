var ly344122198 = {
	chunk: function(array,size) {
			var arr = [ ]
			for (var i = 0; i < array.length; i += size) {
				arr.push(array.slice(i , i + size))
			}	
			return arr
			}
}