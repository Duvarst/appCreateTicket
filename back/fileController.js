class fileController {
  async uploadFile(req, res) {
    try {
      const { files } = req.body;
      if (files) {
        files.mv(`public/image/${files.name}`);
      }

      return res.send("Ok");
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "Upload error" });
    }
  }
}
export default new fileController();
