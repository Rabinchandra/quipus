const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyDZNPzDNPZVALY4qJFj28kgOG5Ov8SNl9k");

async function getAiResponse(company1, company2) {
  console.log("Gen", company1, company2);
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
        ${company1}.
        ${company2}.
        compare this data. This is used to choose which one is better for investment. Give your response in more user friendly brief way so as I am using this in my own chatbot interface. A naive user must be able to comprehend your response.  Give me in html format for example if you're going to next line then use <br>`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

export default getAiResponse;
