export function getItems() {
    return new Promise(function(resolve) {
        const items = [
            {
                id: 1,
                description: "Ekspeditionsgebyr",
                quantity: 0,
                unitPrice: 75.0,
                minQuantity: 1,
                maxQuantity: 1
            },
            {
                id: 2,
                description: "Depositum",
                quantity: 0,
                unitPrice: 2000.0,
                minQuantity: 1,
                maxQuantity: 1
            },
            {
                id: 3,
                description: "Linnedpakke",
                quantity: 0,
                unitPrice: 89.0,
                minQuantity: 0,
                maxQuantity: 10
            },
            {
                id: 4,
                description: "Slutrengøring",
                quantity: 0,
                unitPrice: 798.0,
                minQuantity: 0,
                maxQuantity: 1
            }
        ];

        resolve(items);
    });
}
