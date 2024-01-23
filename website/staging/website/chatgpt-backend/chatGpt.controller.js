const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const askToChatGpt = async function (req, res) {
  
  const openAIInstance = await _createOpenAIInstance();

  await openAIInstance
    .completions.create({
      model: "gpt-3.5-turbo",s
      messages: [{"role": "user", "content" : req.body.message}],
      max_tokens: 500,
    })
    .then((response) => {
      const repliedMessage = response.data.choices[0].text;
      res.send({ "from": "chatGpt", "data": repliedMessage });
    })
    .catch((error) => {
      // Report error
      console.log("Error ", error);
    });
};

const _createOpenAIInstance = async () => {
  const conf = await new Configuration({
    apiKey: process.env.CHATGPT_TOKEN,
  });
  return await new OpenAIApi(conf);
};

module.exports = {
  askToChatGpt,
};