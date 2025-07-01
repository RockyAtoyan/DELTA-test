import './main.scss'

import Highcharts from 'highcharts'

const tableRows = document.querySelectorAll('.table-body .table-row')

tableRows.forEach(row => {
	row.addEventListener('click', async () => {
		if (row.classList.contains('active')) {
			row.classList.remove('active')
			await removeChartContainer()
			return
		}
		setActiveRow(row)
		renderChartContainer(row)
	})
})

function setActiveRow(row) {
	const isActive = row?.classList?.contains('active')
	tableRows?.forEach(r => r.classList.remove('active'))
	if (!isActive) {
		row?.classList?.add('active')
	}
}

async function renderChartContainer(row) {
	const chart = document.getElementById('chart')
	if (chart) chart.remove()
	if (document.getElementById('chart')) {
		return
	}
	const div = document.createElement('div')
	div.id = 'chart'
	div.classList.add('chart')
	div.innerHTML = '<div></div>'
	row?.insertAdjacentElement('afterend', div)
	renderChart()
	setTimeout(() => {
		div.classList.add('active')
	}, 0)
}

async function removeChartContainer() {
	const chart = document.getElementById('chart')
	if (chart) {
		chart.removeChild(document.querySelector('#chart > div'))
		chart.classList.remove('active')
		return new Promise(resolve => {
			setTimeout(() => {
				chart.remove()
				resolve()
			}, 300)
		})
	}
}

function renderChart() {
	const chart = document.querySelector('#chart > div')
	if (!chart) return
	Highcharts.chart(chart, {
		title: {
			text: '',
		},

		xAxis: {
			tickWidth: 6,
			tickLength: 6,
			title: {
				enabled: false,
			},
			labels: {
				enabled: false,
			},
		},

		yAxis: {
			lineWidth: 1,
			type: 'logarithmic',
			title: {
				enabled: false,
			},
			labels: {
				enabled: false,
			},
			tickWidth: 6,
			tickLength: 6,
		},

		series: [
			{
				showInLegend: false,
				name: '',
				data: [16, 361, 1018, 2025, 3192, 1000, 500, 5200],
				color: '#037d50',
			},
		],
	})
}
