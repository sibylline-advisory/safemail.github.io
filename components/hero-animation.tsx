"use client"

import { useState, useEffect } from "react"
import { Mail, Shield, CheckCircle, AlertTriangle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function HeroAnimation() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-[0_0_60px_-15px_rgba(0,0,0,0.1)]">
      <div className="absolute top-0 left-0 right-0 h-12 bg-slate-50 border-b border-slate-100 flex items-center px-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
        <div className="mx-auto flex items-center gap-2">
          <Mail className="h-4 w-4 text-slate-400" />
          <span className="text-sm font-medium text-slate-600">Email Viewer</span>
        </div>
      </div>

      <div className="pt-16 px-6 pb-6 h-full">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="email"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="border-b border-slate-100 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-slate-900">Urgent: Update Your Account Information</p>
                    <p className="text-sm text-slate-500">security@bankofamerica-secure.com</p>
                  </div>
                  <span className="text-xs text-slate-400">10:42 AM</span>
                </div>
              </div>
              <div className="py-4 flex-1">
                <p className="mb-4 text-slate-700">Dear Valued Customer,</p>
                <p className="mb-4 text-slate-700">
                  We have detected unusual activity on your account. To ensure your account security, please verify your
                  information by clicking the link below:
                </p>
                <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-4 inline-block text-sm">
                  Verify Account Now
                </div>
                <p className="mb-4 text-slate-700">
                  If you do not verify within 24 hours, your account may be temporarily suspended.
                </p>
                <p className="text-slate-700">
                  Thank you,
                  <br />
                  Bank of America Security Team
                </p>
              </div>
              <div className="border-t border-slate-100 pt-4 flex justify-end">
                <button className="bg-gradient-brand text-white px-4 py-2 rounded-full text-sm">
                  Forward to Safemail AI
                </button>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="processing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center h-full"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-brand flex items-center justify-center mb-6">
                <Shield className="h-10 w-10 text-white animate-pulse" />
              </div>
              <h3 className="text-xl font-medium mb-2 text-slate-900">Analyzing Email</h3>
              <p className="text-slate-500 text-center max-w-[300px]">
                Safemail AI is scanning for phishing attempts, malicious links, and suspicious patterns...
              </p>
              <div className="mt-8 w-full max-w-md bg-slate-100 rounded-full h-1.5">
                <motion.div
                  className="bg-gradient-brand h-1.5 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2 }}
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                  <h3 className="font-medium text-red-700">Phishing Attempt Detected</h3>
                </div>
                <p className="text-sm text-red-600">
                  This email appears to be a phishing attempt impersonating Bank of America.
                </p>
              </div>

              <div className="space-y-4 flex-1">
                <div className="border border-slate-100 rounded-xl p-4">
                  <h4 className="font-medium mb-2 text-slate-900">Sender Analysis</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    <span className="font-medium">From:</span> security@bankofamerica-secure.com
                  </p>
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Suspicious domain - not an official Bank of America domain</span>
                  </div>
                </div>

                <div className="border border-slate-100 rounded-xl p-4">
                  <h4 className="font-medium mb-2 text-slate-900">Link Analysis</h4>
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Malicious link detected - redirects to a phishing site</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-slate-500">Analysis completed in 12 seconds</p>
                  <button className="bg-slate-50 hover:bg-slate-100 px-4 py-2 rounded-full text-sm text-slate-700">
                    View Full Report
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="safe"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full"
            >
              <div className="flex items-center justify-center flex-1">
                <div className="text-center">
                  <div className="mx-auto w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-xl font-medium mb-2 text-slate-900">You&apos;re Protected</h3>
                  <p className="text-slate-500 max-w-[350px]">
                    Safemail AI detected and warned you about this phishing attempt, keeping your information safe.
                  </p>
                  <div className="mt-8">
                    <button className="bg-gradient-brand text-white px-6 py-2 rounded-full text-sm">
                      Try Safemail AI Today
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
