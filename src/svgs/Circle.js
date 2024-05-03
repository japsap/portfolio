import { useTheme } from "next-themes";
import React from "react";

const Circle = ({ CustomClassName }) => {

  const { theme } = useTheme()

  return (
    <>
      {theme === "dark" ? (
        <svg
          className={CustomClassName}
          width="633"
          height="268"
          viewBox="0 0 633 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M261.5 132C261.5 204.629 203.07 263.5 131 263.5C58.9304 263.5 0.5 204.629 0.5 132C0.5 59.371 58.9304 0.5 131 0.5C203.07 0.5 261.5 59.371 261.5 132Z"
            stroke="black"
          />
          <path
            d="M632.5 136C632.5 208.629 574.07 267.5 502 267.5C429.93 267.5 371.5 208.629 371.5 136C371.5 63.371 429.93 4.5 502 4.5C574.07 4.5 632.5 63.371 632.5 136Z"
            stroke="black"
          />
          <g filter="url(#filter0_d_0_1)">
            <path
              d="M443.11 117.153C443.503 120.411 443.769 123.707 443.901 127.036L443.402 127.056C443.467 128.696 443.5 130.344 443.5 132C443.5 133.656 443.467 135.304 443.402 136.944L443.901 136.964C443.769 140.293 443.503 143.589 443.11 146.847L442.614 146.787C442.217 150.075 441.689 153.325 441.036 156.53L441.526 156.63C440.862 159.887 440.069 163.098 439.152 166.258L438.672 166.119C437.751 169.293 436.706 172.415 435.54 175.48L436.008 175.658C434.829 178.757 433.529 181.798 432.112 184.776L431.661 184.561C430.244 187.54 428.71 190.455 427.065 193.3L427.497 193.55C425.841 196.415 424.072 199.21 422.198 201.928L421.786 201.644C419.916 204.356 417.939 206.992 415.863 209.546L416.251 209.861C414.165 212.426 411.979 214.908 409.699 217.302L409.337 216.957C407.067 219.339 404.703 221.634 402.251 223.836L402.585 224.208C400.128 226.414 397.584 228.526 394.956 230.539L394.652 230.143C392.043 232.142 389.353 234.043 386.586 235.842L386.859 236.261C384.094 238.058 381.253 239.752 378.343 241.338L378.103 240.898C375.221 242.469 372.27 243.932 369.256 245.283L369.461 245.74C366.455 247.087 363.386 248.323 360.26 249.443L360.092 248.973C357.007 250.077 353.867 251.068 350.677 251.94L350.809 252.423C347.637 253.289 344.415 254.039 341.149 254.666L341.055 254.175C337.843 254.792 334.588 255.29 331.294 255.664L331.35 256.161C328.091 256.532 324.794 256.782 321.464 256.907L321.446 256.407C319.805 256.469 318.156 256.5 316.5 256.5C314.844 256.5 313.195 256.469 311.555 256.407L311.536 256.907C308.206 256.782 304.909 256.532 301.65 256.161L301.706 255.664C298.412 255.29 295.157 254.792 291.945 254.175L291.851 254.666C288.585 254.039 285.363 253.289 282.192 252.423L282.323 251.94C279.133 251.068 275.993 250.077 272.909 248.973L272.74 249.443C269.614 248.323 266.545 247.087 263.539 245.74L263.744 245.283C260.73 243.932 257.779 242.469 254.897 240.898L254.657 241.338C251.747 239.752 248.906 238.058 246.141 236.261L246.414 235.842C243.647 234.043 240.957 232.142 238.348 230.143L238.044 230.539C235.416 228.526 232.872 226.414 230.415 224.208L230.749 223.836C228.297 221.634 225.933 219.339 223.663 216.957L223.301 217.302C221.021 214.908 218.835 212.426 216.749 209.861L217.137 209.546C215.061 206.992 213.084 204.356 211.214 201.644L210.802 201.928C208.928 199.21 207.159 196.415 205.503 193.55L205.935 193.3C204.29 190.455 202.756 187.54 201.339 184.561L200.888 184.776C199.471 181.798 198.171 178.757 196.992 175.658L197.46 175.48C196.294 172.415 195.249 169.293 194.328 166.119L193.848 166.258C192.931 163.098 192.138 159.887 191.474 156.63L191.964 156.53C191.311 153.325 190.783 150.075 190.386 146.787L189.89 146.847C189.497 143.589 189.231 140.293 189.099 136.964L189.598 136.944C189.533 135.304 189.5 133.656 189.5 132C189.5 130.344 189.533 128.696 189.598 127.056L189.099 127.036C189.231 123.707 189.497 120.411 189.89 117.153L190.386 117.213C190.783 113.925 191.311 110.675 191.964 107.47L191.474 107.37C192.138 104.113 192.931 100.902 193.848 97.7416L194.328 97.8809C195.249 94.7071 196.294 91.5849 197.46 88.5198L196.992 88.3421C198.171 85.2427 199.471 82.2016 200.888 79.2242L201.339 79.439C202.756 76.46 204.29 73.5451 205.935 70.6999L205.503 70.4496C207.159 67.5846 208.928 64.7901 210.802 62.0717L211.214 62.3556C213.084 59.6438 215.061 57.008 217.137 54.4541L216.749 54.1386C218.835 51.5743 221.021 49.0922 223.301 46.6981L223.663 47.0429C225.933 44.6605 228.297 42.3656 230.749 40.1638L230.415 39.7917C232.872 37.5863 235.416 35.474 238.044 33.4605L238.348 33.8574C240.957 31.8581 243.647 29.9566 246.414 28.1585L246.141 27.7392C248.906 25.9422 251.747 24.2481 254.657 22.6624L254.897 23.1015C257.779 21.5313 260.73 20.0678 263.744 18.7166L263.539 18.2604C266.545 16.9129 269.614 15.6766 272.74 14.5568L272.908 15.0275C275.993 13.9226 279.133 12.9317 282.323 12.0598L282.191 11.5775C285.363 10.7108 288.584 9.96136 291.851 9.33415L291.945 9.82517C295.157 9.20835 298.412 8.71022 301.706 8.33563L301.65 7.83883C304.909 7.46815 308.206 7.21799 311.536 7.09301L311.554 7.59266C313.195 7.53107 314.844 7.5 316.5 7.5C318.156 7.5 319.805 7.53107 321.445 7.59265L321.464 7.09301C324.794 7.21798 328.091 7.46814 331.35 7.83882L331.294 8.33562C334.588 8.71021 337.843 9.20835 341.055 9.82517L341.149 9.33414C344.415 9.96136 347.637 10.7108 350.808 11.5775L350.677 12.0598C353.867 12.9317 357.007 13.9226 360.091 15.0275L360.26 14.5568C363.386 15.6766 366.455 16.9129 369.461 18.2604L369.256 18.7166C372.27 20.0678 375.221 21.5313 378.103 23.1015L378.343 22.6624C381.253 24.2481 384.094 25.9422 386.859 27.7392L386.586 28.1585C389.353 29.9566 392.043 31.8581 394.652 33.8574L394.956 33.4605C397.584 35.474 400.128 37.5863 402.585 39.7917L402.251 40.1637C404.703 42.3656 407.067 44.6605 409.337 47.0429L409.699 46.6981C411.979 49.0922 414.165 51.5743 416.251 54.1386L415.863 54.4541C417.939 57.008 419.916 59.6438 421.786 62.3556L422.198 62.0717C424.072 64.7901 425.841 67.5846 427.497 70.4496L427.065 70.6999C428.71 73.5451 430.244 76.46 431.661 79.439L432.112 79.2242C433.529 82.2016 434.829 85.2427 436.008 88.3421L435.54 88.5198C436.706 91.5849 437.751 94.7071 438.672 97.8809L439.152 97.7416C440.069 100.902 440.862 104.113 441.526 107.37L441.036 107.47C441.689 110.675 442.217 113.925 442.614 117.213L443.11 117.153Z"
              stroke="black"
              strokeDasharray="10 10"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_1"
              x="185"
              y="7"
              width="263"
              height="258"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ) : (
        <svg
          className={CustomClassName}
          width="633"
          height="268"
          viewBox="0 0 633 268"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M261.5 132C261.5 204.629 203.07 263.5 131 263.5C58.9304 263.5 0.5 204.629 0.5 132C0.5 59.371 58.9304 0.5 131 0.5C203.07 0.5 261.5 59.371 261.5 132Z"
            stroke="white"
          />
          <path
            d="M632.5 136C632.5 208.629 574.07 267.5 502 267.5C429.93 267.5 371.5 208.629 371.5 136C371.5 63.371 429.93 4.5 502 4.5C574.07 4.5 632.5 63.371 632.5 136Z"
            stroke="white"
          />
          <g filter="url(#filter0_d_0_1)">
            <path
              d="M443.11 117.153C443.503 120.411 443.769 123.707 443.901 127.036L443.402 127.056C443.467 128.696 443.5 130.344 443.5 132C443.5 133.656 443.467 135.304 443.402 136.944L443.901 136.964C443.769 140.293 443.503 143.589 443.11 146.847L442.614 146.787C442.217 150.075 441.689 153.325 441.036 156.53L441.526 156.63C440.862 159.887 440.069 163.098 439.152 166.258L438.672 166.119C437.751 169.293 436.706 172.415 435.54 175.48L436.008 175.658C434.829 178.757 433.529 181.798 432.112 184.776L431.661 184.561C430.244 187.54 428.71 190.455 427.065 193.3L427.497 193.55C425.841 196.415 424.072 199.21 422.198 201.928L421.786 201.644C419.916 204.356 417.939 206.992 415.863 209.546L416.251 209.861C414.165 212.426 411.979 214.908 409.699 217.302L409.337 216.957C407.067 219.339 404.703 221.634 402.251 223.836L402.585 224.208C400.128 226.414 397.584 228.526 394.956 230.539L394.652 230.143C392.043 232.142 389.353 234.043 386.586 235.842L386.859 236.261C384.094 238.058 381.253 239.752 378.343 241.338L378.103 240.898C375.221 242.469 372.27 243.932 369.256 245.283L369.461 245.74C366.455 247.087 363.386 248.323 360.26 249.443L360.092 248.973C357.007 250.077 353.867 251.068 350.677 251.94L350.809 252.423C347.637 253.289 344.415 254.039 341.149 254.666L341.055 254.175C337.843 254.792 334.588 255.29 331.294 255.664L331.35 256.161C328.091 256.532 324.794 256.782 321.464 256.907L321.446 256.407C319.805 256.469 318.156 256.5 316.5 256.5C314.844 256.5 313.195 256.469 311.555 256.407L311.536 256.907C308.206 256.782 304.909 256.532 301.65 256.161L301.706 255.664C298.412 255.29 295.157 254.792 291.945 254.175L291.851 254.666C288.585 254.039 285.363 253.289 282.192 252.423L282.323 251.94C279.133 251.068 275.993 250.077 272.909 248.973L272.74 249.443C269.614 248.323 266.545 247.087 263.539 245.74L263.744 245.283C260.73 243.932 257.779 242.469 254.897 240.898L254.657 241.338C251.747 239.752 248.906 238.058 246.141 236.261L246.414 235.842C243.647 234.043 240.957 232.142 238.348 230.143L238.044 230.539C235.416 228.526 232.872 226.414 230.415 224.208L230.749 223.836C228.297 221.634 225.933 219.339 223.663 216.957L223.301 217.302C221.021 214.908 218.835 212.426 216.749 209.861L217.137 209.546C215.061 206.992 213.084 204.356 211.214 201.644L210.802 201.928C208.928 199.21 207.159 196.415 205.503 193.55L205.935 193.3C204.29 190.455 202.756 187.54 201.339 184.561L200.888 184.776C199.471 181.798 198.171 178.757 196.992 175.658L197.46 175.48C196.294 172.415 195.249 169.293 194.328 166.119L193.848 166.258C192.931 163.098 192.138 159.887 191.474 156.63L191.964 156.53C191.311 153.325 190.783 150.075 190.386 146.787L189.89 146.847C189.497 143.589 189.231 140.293 189.099 136.964L189.598 136.944C189.533 135.304 189.5 133.656 189.5 132C189.5 130.344 189.533 128.696 189.598 127.056L189.099 127.036C189.231 123.707 189.497 120.411 189.89 117.153L190.386 117.213C190.783 113.925 191.311 110.675 191.964 107.47L191.474 107.37C192.138 104.113 192.931 100.902 193.848 97.7416L194.328 97.8809C195.249 94.7071 196.294 91.5849 197.46 88.5198L196.992 88.3421C198.171 85.2427 199.471 82.2016 200.888 79.2242L201.339 79.439C202.756 76.46 204.29 73.5451 205.935 70.6999L205.503 70.4496C207.159 67.5846 208.928 64.7901 210.802 62.0717L211.214 62.3556C213.084 59.6438 215.061 57.008 217.137 54.4541L216.749 54.1386C218.835 51.5743 221.021 49.0922 223.301 46.6981L223.663 47.0429C225.933 44.6605 228.297 42.3656 230.749 40.1638L230.415 39.7917C232.872 37.5863 235.416 35.474 238.044 33.4605L238.348 33.8574C240.957 31.8581 243.647 29.9566 246.414 28.1585L246.141 27.7392C248.906 25.9422 251.747 24.2481 254.657 22.6624L254.897 23.1015C257.779 21.5313 260.73 20.0678 263.744 18.7166L263.539 18.2604C266.545 16.9129 269.614 15.6766 272.74 14.5568L272.908 15.0275C275.993 13.9226 279.133 12.9317 282.323 12.0598L282.191 11.5775C285.363 10.7108 288.584 9.96136 291.851 9.33415L291.945 9.82517C295.157 9.20835 298.412 8.71022 301.706 8.33563L301.65 7.83883C304.909 7.46815 308.206 7.21799 311.536 7.09301L311.554 7.59266C313.195 7.53107 314.844 7.5 316.5 7.5C318.156 7.5 319.805 7.53107 321.445 7.59265L321.464 7.09301C324.794 7.21798 328.091 7.46814 331.35 7.83882L331.294 8.33562C334.588 8.71021 337.843 9.20835 341.055 9.82517L341.149 9.33414C344.415 9.96136 347.637 10.7108 350.808 11.5775L350.677 12.0598C353.867 12.9317 357.007 13.9226 360.091 15.0275L360.26 14.5568C363.386 15.6766 366.455 16.9129 369.461 18.2604L369.256 18.7166C372.27 20.0678 375.221 21.5313 378.103 23.1015L378.343 22.6624C381.253 24.2481 384.094 25.9422 386.859 27.7392L386.586 28.1585C389.353 29.9566 392.043 31.8581 394.652 33.8574L394.956 33.4605C397.584 35.474 400.128 37.5863 402.585 39.7917L402.251 40.1637C404.703 42.3656 407.067 44.6605 409.337 47.0429L409.699 46.6981C411.979 49.0922 414.165 51.5743 416.251 54.1386L415.863 54.4541C417.939 57.008 419.916 59.6438 421.786 62.3556L422.198 62.0717C424.072 64.7901 425.841 67.5846 427.497 70.4496L427.065 70.6999C428.71 73.5451 430.244 76.46 431.661 79.439L432.112 79.2242C433.529 82.2016 434.829 85.2427 436.008 88.3421L435.54 88.5198C436.706 91.5849 437.751 94.7071 438.672 97.8809L439.152 97.7416C440.069 100.902 440.862 104.113 441.526 107.37L441.036 107.47C441.689 110.675 442.217 113.925 442.614 117.213L443.11 117.153Z"
              stroke="white"
              strokeDasharray="10 10"
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_1"
              x="185"
              y="7"
              width="263"
              height="258"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_1"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_1"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      )}
    </>
  );
};

export default Circle;
