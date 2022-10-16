function getBanknoteList(amount) {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result = []
    for (let i = 0; i < banknotes.length; i++) {
        while (amount >= banknotes[i]) {
            result.push(banknotes[i])
            amount -= banknotes[i]
        }
    }
    return result
}