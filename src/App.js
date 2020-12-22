/** @jsx jsx */
import {
	jsx,
	ThemeProvider,
	Heading,
	Flex,
	Select,
	Textarea,
	Box,
	Link,
	Button,
} from "theme-ui";
import { useState, useRef } from "react";
import owoify from "owoify-js";
import twitterMeme from "./twitterMeme";
import theme from "./theme";

const mappers = {
	OwOify: (text) => owoify(text, "uwu"),
	"Twitter Official Source": (text) => twitterMeme(text),
};
const mapperLabels = Object.keys(mappers);

function App() {
	const [mapping, setMapping] = useState(mapperLabels[0]);
	const [inputText, setInputText] = useState("");
	const [outputText, setOutputText] = useState("");

	const inputTextRef = useRef(inputText);
	const mappingRef = useRef(mapping);

	return (
		<ThemeProvider theme={theme}>
			<Flex
				sx={{
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box
					sx={{
						width: ["90%", null, "50em"],
					}}
				>
					<Heading
						sx={{
							width: "100%",
							marginTop: "2em",
							marginBottom: "1em",
						}}
					>
						uni2code
					</Heading>
					<Select
						sx={{ fontSize: 18, width: ["100%", null, "40%"] }}
						onChange={(e) => {
							setMapping(() => {
								mappingRef.current = e.target.value;
								setOutputText(
									mappers[mappingRef.current](inputTextRef.current)
								);
							});
						}}
					>
						{mapperLabels.map((label) => (
							<option key={label} value={label}>
								{label}
							</option>
						))}
					</Select>
					<Box sx={{ height: "1em" }} />
					<Flex
						sx={{
							alignItems: "center",
							justifyContent: ["flex-start", null, "space-between"],
							flexDirection: ["column", null, "row"],
						}}
					>
						<Box sx={{ width: "100%" }}>
							<Heading as="h3">Input</Heading>
							<Textarea
								variant="natural"
								rows={6}
								value={inputText}
								onChange={(e) => {
									setInputText(() => {
										inputTextRef.current = e.target.value;
										setOutputText(
											mappers[mappingRef.current](inputTextRef.current)
										);
									});
								}}
							/>
						</Box>
						<Box sx={{ width: "1rem", height: "1rem" }} />
						<Box sx={{ width: "100%" }}>
							<Heading as="h3">Output</Heading>
							<Textarea
								variant="natural"
								sx={{ backgroundColor: "unselectable" }}
								rows={6}
								value={outputText}
							/>
						</Box>
					</Flex>
					<Box sx={{ height: "1em" }} />
					<Flex
						sx={{
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Flex sx={{ width: "100%" }}>
							<Link href="https://github.com/starptr/uni2code">
								Source Code
							</Link>
						</Flex>
						<Flex sx={{ width: "100%", justifyContent: "center" }}>
							<Link href="https://youtu.be/SIqG4kHN5O0">Video</Link>
						</Flex>
						<Flex sx={{ width: "100%", justifyContent: "flex-end" }}>
							<Button onClick={() => navigator.clipboard.writeText(outputText)}>
								Copy
							</Button>
						</Flex>
					</Flex>
				</Box>
			</Flex>
		</ThemeProvider>
	);
}

export default App;
