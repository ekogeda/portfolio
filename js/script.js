function getWords(monthCount) {
  function getPlural(number, word) {
    return number === 1 && word.one || word.other;
  }

  var months = { one: 'month', other: 'months' },
    years = { one: 'year', other: 'years' },
    m = monthCount % 12,
    y = Math.floor(monthCount / 12),
    result = [];

  y && result.push(y + ' ' + getPlural(y, years));
  m && result.push(m + ' ' + getPlural(m, months));
  return result.join(' and ');
}

function monthDiff(dateFrom, dateTo) {
  return dateTo.getMonth() - dateFrom.getMonth() +
    (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

let y = new Date().getFullYear()
let m = new Date().getMonth()


function getYearAndMonthDifference(start, end) {
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();

  let yearDiff = endYear - startYear;
  let monthDiff = endMonth - startMonth;

  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }

  return {
    year: yearDiff,
    month: monthDiff,
  };
}

result = getYearAndMonthDifference(new Date('August 2018'), new Date(y, m))
document.getElementById('years').textContent = result.year + ' years'

result = getYearAndMonthDifference(new Date('June 2022'), new Date(y, m))
document.getElementById('tonote').textContent = '[' + (result.year > 0 ? result.year + ' year(s) and ' : '') + result.month + ' month(s)] '

result = getYearAndMonthDifference(new Date('March 2021'), new Date(y, m))
document.getElementById('olak').textContent = '[' + (result.year > 0 ? result.year + ' year(s) and ' : '') + result.month + ' month(s)] '

result = getYearAndMonthDifference(new Date('March 2020'), new Date(y, m))
document.getElementById('sandisfy').textContent = '[' + (result.year > 0 ? result.year + ' year(s) and ' : '') + result.month + ' month(s)] '
