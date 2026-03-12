import Groq from "groq-sdk";

const client = new Groq({
  apiKey: "",
  dangerouslyAllowBrowser: true,
});

const runChat = async (prompt) => {
  const response = await client.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 2048,
  });
  console.log(response.choices[0].message.content);
  return response.choices[0].message.content;
};

export default runChat;
