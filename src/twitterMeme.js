const std_0 = "0".codePointAt();
const std_9 = "9".codePointAt();
const std_A = "A".codePointAt();
const std_Z = "Z".codePointAt();
const std_a = "a".codePointAt();
const std_z = "z".codePointAt();

const bold_0 = "𝟬".codePointAt();
const bold_A = "𝗔".codePointAt();
const bold_a = "𝗮".codePointAt();

export default (text) =>
	"ⓘ  " +
	(text
		? Array.from(text)
				.map((char) => {
					let charCodePoint = char.codePointAt();
					if (charCodePoint >= std_0 && charCodePoint <= std_9) {
						return String.fromCodePoint(charCodePoint - std_0 + bold_0);
					} else if (charCodePoint >= std_A && charCodePoint <= std_Z) {
						return String.fromCodePoint(charCodePoint - std_A + bold_A);
					} else if (charCodePoint >= std_a && charCodePoint <= std_z) {
						return String.fromCodePoint(charCodePoint - std_a + bold_a);
					} else {
						return char;
					}
				})
				.join("")
		: "");
