const buildHeadings = data => {
  const headings = data.reduce((accumulator, item) => [...accumulator, ...Object.keys(item)], [])

  return [...new Set(headings)]
}

const buildRows = (data, headings) => {
  let rows = []
  data.forEach(item => {
    let row = []
    headings.forEach(heading => {
      row.push(item[heading])
    })
    rows.push(row)
  })
  return rows
}

export { buildHeadings, buildRows }