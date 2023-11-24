const Days = ['SUN', 'MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

export const oneDay = 1 * 24 * 60 * 60;
let tody = new Date();
tody.setHours(0, 0, 0, 0);
tody = parseInt(new Date(tody).getTime() / 1000);

export const today = tody;



export function generateDates(from, num = 7) {
    if (!from) {
      from = today;
    }
  
    const toReturn = [];
  
    let start = 0, end = 0;
  
    if(num > 0) end = num;
    else start = num;
  
    while(start !== 0 || end !== -1){
      const now = from + (start + end) * oneDay;
      const thisDate = new Date(now * 1000);
      const toPush = {
        now,
        active: now == today,
        date: thisDate.getDate(),
        day: Days[thisDate.getDay()],
        fullDate: thisDate.toLocaleDateString('en-gb')
      }
      if(start < 0){
        toReturn.push(toPush);
        start++;
      }else{
        toReturn.unshift(toPush);
        end--;
      }
    }
  
  
    return toReturn;
  }