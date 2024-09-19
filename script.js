function computeTraverse() {
    let cumulativeE = 0;
    let cumulativeN = 0;

    // Loop through stations (for 2 stations in this example)
    for (let i = 1; i <= 2; i++) {
        const distance = parseFloat(document.getElementById(`distance${i}`).value);
        const bearing = parseFloat(document.getElementById(`bearing${i}`).value);

        if (isNaN(distance) || isNaN(bearing)) {
            alert('Please enter valid numeric values for distance and bearing.');
            return;
        }

        const bearingRadians = bearing * Math.PI / 180;

        const deltaE = distance * Math.sin(bearingRadians);
        const deltaN = distance * Math.cos(bearingRadians);

        cumulativeE += deltaE;
        cumulativeN += deltaN;

        document.getElementById(`deltaE${i}`).innerText = deltaE.toFixed(2);
        document.getElementById(`deltaN${i}`).innerText = deltaN.toFixed(2);
        document.getElementById(`cumulativeE${i}`).innerText = cumulativeE.toFixed(2);
        document.getElementById(`cumulativeN${i}`).innerText = cumulativeN.toFixed(2);
    }
}
