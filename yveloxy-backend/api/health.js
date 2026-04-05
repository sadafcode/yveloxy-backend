/* =============================================
   Health Check Endpoint
   ============================================= */

export default function handler(req, res) {
  res.status(200).json({
    status: 'ok',
    message: 'Yveloxy Chatbot API is running'
  });
}
