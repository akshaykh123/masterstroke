import { Router } from "express";


const router = Router();

router.post("/certificates", createCertificate);

router.get("/certificates", getAllCertificates);

router.get("/certificates/:id", getACertificate);

router.put("/certificates/:id", updateCertificate);

router.delete("/certificates/:id", deleteCertificate);

export default router;