const crypto = require("crypto");

function randomPassword(length, str) {
	return Array.from(crypto.randomFillSync(new Uint32Array(length)))
		.map((x) => str[x % str.length])
		.join("");
}

exports.generatePWD = async (req, res) => {
	var length = req.query.length;
	var chars = req.query.characters;
	if (length !== undefined && chars !== undefined && length >= 1) {
		return res.status(200).json({ password: randomPassword(length, chars) });
	} else {
		return res.status(400).json({
			error: "Bad Query Parameters",
		});
	}
};
