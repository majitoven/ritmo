"use client";

import React from "react";

const Partners = () => {
  // Create multiple copies of the phrase for the ticker effect
  const repeatedPhrases = Array(10).fill(null);
  
  return (
    <>
      <div className="ticker-tape-container">
        <div className="ticker-wrap">
          <div className="ticker">
            {repeatedPhrases.map((_, index) => (
              <div key={index} className="ticker-item d-flex justify-content-center align-items-center">
                <h3 className="title tx-dark d-flex justify-content-center align-items-center">
                  <span className="fw-bold" >Le damos</span>
                  <span className="font-recoleta ms-2">ritmo a tus ideas</span>

                </h3>
                
                {/* Line separator between phrases */}
                <div className="ticker-separator"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styled JSX for ticker styles */}
      <style jsx global>{`
        .ticker-tape-container {
          width: 100%;
          overflow: hidden;
        }

        .ticker-wrap {
          width: 100%;
          overflow: hidden;
          padding-left: 100%;
          box-sizing: content-box;
        }

        .ticker {
          display: inline-flex;
          white-space: nowrap;
          padding-right: 100%;
          box-sizing: content-box;
          animation: ticker 45s linear infinite;
        }

        .ticker-item {
          display: inline-flex;
          align-items: center;
        }

        .ticker-separator {
          width: 80px;
          height: 1px;
          background-color: #000;
          margin: 0 32px;
        }

        @keyframes ticker {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-100%, 0, 0);
          }
        }
      `}</style>
    </>
  );
};

export default Partners;
