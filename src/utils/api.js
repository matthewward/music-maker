const OPENROUTER_API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY

export const fetchOpenRouter = async (messages) => {
  try {
    const response = await fetch(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'anthropic/claude-3-haiku',
          messages: messages,
          temperature: 0.8,
        }),
      }
    )
    const data = await response.json()
    return data.choices[0].message.content
  } catch (error) {
    console.error('Error:', error)
    throw error
  }
}
