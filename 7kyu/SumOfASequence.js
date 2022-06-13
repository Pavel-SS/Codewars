//Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
// If begin value is greater than the end, function should returns 0


//var 1
const sequenceSum = (begin, end, step) => {
    let arr = [];
    if(begin <= end){
       for ( let i = begin; i <=end; i+=step){
      arr.push(i)
    }
      return arr.reduce((a,b)=> a+b)
    }else{
      return 0
    }
  };

  //var 2
  sequenceSum = (begin, end, step) =>  begin > end ? 0 : begin + sequenceSum(begin + step, end, step)