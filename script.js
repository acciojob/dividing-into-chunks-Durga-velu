const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let ans=[];
	
for(let i=0;i<arr.length;i++){
	let res=arr[i];
	ans=[]
		if(res<=n){
			ans.push(res)
		}
	for(let j=i+1;j<arr.length;j++){
		res=res+arr[j]
		if(res<=n){
			
			ans.push(arr[j])
		}
		else{
			break;
		}
			}
	i=j;
}
	
	return ans;

};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
