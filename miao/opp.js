
function MyMap (values) {
	var result = [ ]
	if (Array.isArray(this.values[0])) {
		for (var i = 0; i < this.values.length) {
			result.push({this.values[i][0],this.values[i][1]})
		}
		return result
	} else {
		return false
	}
}

var m = new MyMap([[1,2],['x',3]])

MyMap.prototype = {
	delete: function (value) {
		for (var i = 0; i < this.length; i++) {
			if (this[i][0] == value) {
				this.splice(i,1)
				return this
			}
		}
	}
	

}