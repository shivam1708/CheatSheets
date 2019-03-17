module.exports = {

	sigmoid : function(matrix){
		assert(matrix.length > 0 && matrix[0].length > 0,"Dimension error. Please check the dimensions of input matrix!! " + matrix.length + " " + matrix[0].length);
		var sigValue = [];
		for(let i = 0;i<matrix.length;i++){
			sigValue[i] = []; 
			for(let j = 0;j<matrix[0].length;j++){
				sigValue[i][j] = 1/(1+Math.exp(-matrix[i][j]) );
			}
		}
		
		return sigValue;
	},
	tanh : function(matrix){
		assert(matrix.length > 0 && matrix[0].length > 0,"Dimension error. Please check the dimensions of input matrix!! " + matrix.length + " " + matrix[0].length);
		var sigValue = [];
		for(let i = 0;i<matrix.length;i++){
			sigValue[i] = []; 
			for(let j = 0;j<matrix[0].length;j++){
				sigValue[i][j] = (Math.exp(2*matrix[i][j])-1)/(Math.exp(2*matrix[i][j])+1 );
			}
		}
		
		return sigValue;
	},
	LU : function(matrix){
		assert(matrix.length > 0 && matrix[0].length > 0,"Dimension error. Please check the dimensions of input matrix!! " + matrix.length + " " + matrix[0].length);
		var sigValue = [];
		for(let i = 0;i<matrix.length;i++){
			sigValue[i] = []; 
			for(let j = 0;j<matrix[0].length;j++){
				sigValue[i][j] = Math.max(0,matrix[i][j]);
			}
		}
		
		return sigValue;
	},
	ReLU : function(matrix){
		assert(matrix.length > 0 && matrix[0].length > 0,"Dimension error. Please check the dimensions of input matrix!! " + matrix.length + " " + matrix[0].length);
		var sigValue = [];
		for(let i = 0;i<matrix.length;i++){
			sigValue[i] = []; 
			for(let j = 0;j<matrix[0].length;j++){
				sigValue[i][j] = Math.max(0.01*matrix[i][j],matrix[i][j]);
			}
		}
		
		return sigValue;
	}

}