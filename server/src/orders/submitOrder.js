import firebase from 'firebase';

const database = firebase.database();

const submitOrder = (async (req, res) => {
    await new Promise(r => setTimeout(r, 1000))
    const ordersDB = database.ref(`orders/`);
	await ordersDB.get().then(snapshot => {
		const emails = Object.values(snapshot.val() || []);
        ordersDB.child(emails.length).set(req.body.email)
	});
    res.json({
        success: res.statusCode == 200
    })
})

export default submitOrder;