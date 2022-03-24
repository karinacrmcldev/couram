export default function SvgSelector({ id }: { id: string }) {
  switch (id) {
    case "population":
      return (
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6737 16.165C16.3406 15.5877 16.8756 14.8736 17.2423 14.0713C17.6089 13.269 17.7987 12.3972 17.7987 11.515C17.7987 9.85741 17.1402 8.2677 15.9681 7.0956C14.796 5.9235 13.2063 5.26501 11.5487 5.26501C9.89107 5.26501 8.30136 5.9235 7.12926 7.0956C5.95716 8.2677 5.29868 9.85741 5.29868 11.515C5.29867 12.3972 5.48843 13.269 5.85508 14.0713C6.22174 14.8736 6.7567 15.5877 7.42368 16.165C5.67385 16.9574 4.18926 18.2369 3.1474 19.8507C2.10554 21.4645 1.55052 23.3442 1.54868 25.265C1.54868 25.5965 1.68037 25.9145 1.91479 26.1489C2.14921 26.3833 2.46715 26.515 2.79868 26.515C3.1302 26.515 3.44814 26.3833 3.68256 26.1489C3.91698 25.9145 4.04868 25.5965 4.04868 25.265C4.04868 23.2759 4.83885 21.3682 6.24537 19.9617C7.6519 18.5552 9.55955 17.765 11.5487 17.765C13.5378 17.765 15.4455 18.5552 16.852 19.9617C18.2585 21.3682 19.0487 23.2759 19.0487 25.265C19.0487 25.5965 19.1804 25.9145 19.4148 26.1489C19.6492 26.3833 19.9672 26.515 20.2987 26.515C20.6302 26.515 20.9481 26.3833 21.1826 26.1489C21.417 25.9145 21.5487 25.5965 21.5487 25.265C21.5468 23.3442 20.9918 21.4645 19.95 19.8507C18.9081 18.2369 17.4235 16.9574 15.6737 16.165ZM11.5487 15.265C10.807 15.265 10.082 15.0451 9.46529 14.633C8.8486 14.221 8.36796 13.6353 8.08413 12.9501C7.8003 12.2649 7.72604 11.5109 7.87073 10.7834C8.01543 10.056 8.37258 9.38781 8.89703 8.86336C9.42147 8.33892 10.0897 7.98176 10.8171 7.83707C11.5445 7.69238 12.2985 7.76664 12.9837 8.05047C13.669 8.3343 14.2546 8.81494 14.6667 9.43163C15.0787 10.0483 15.2987 10.7733 15.2987 11.515C15.2987 12.5096 14.9036 13.4634 14.2003 14.1667C13.4971 14.8699 12.5432 15.265 11.5487 15.265ZM23.7237 15.665C24.5236 14.7642 25.0462 13.6513 25.2284 12.4604C25.4107 11.2695 25.2448 10.0514 24.7509 8.95251C24.2569 7.85367 23.4559 6.92101 22.4443 6.26679C21.4326 5.61258 20.2534 5.26469 19.0487 5.26501C18.7172 5.26501 18.3992 5.39671 18.1648 5.63113C17.9304 5.86555 17.7987 6.18349 17.7987 6.51501C17.7987 6.84654 17.9304 7.16448 18.1648 7.3989C18.3992 7.63332 18.7172 7.76501 19.0487 7.76501C20.0432 7.76501 20.9971 8.1601 21.7003 8.86336C22.4036 9.56663 22.7987 10.5205 22.7987 11.515C22.7969 12.1716 22.6228 12.8161 22.2938 13.3843C21.9647 13.9524 21.4923 14.4242 20.9237 14.7525C20.7383 14.8594 20.5836 15.0121 20.4741 15.1959C20.3647 15.3798 20.3043 15.5886 20.2987 15.8025C20.2934 16.0147 20.3423 16.2248 20.4408 16.4128C20.5392 16.6009 20.6839 16.7608 20.8612 16.8775L21.3487 17.2025L21.5112 17.29C23.0179 18.0047 24.2891 19.135 25.1749 20.5479C26.0607 21.9608 26.5244 23.5974 26.5112 25.265C26.5112 25.5965 26.6429 25.9145 26.8773 26.1489C27.1117 26.3833 27.4297 26.515 27.7612 26.515C28.0927 26.515 28.4106 26.3833 28.6451 26.1489C28.8795 25.9145 29.0112 25.5965 29.0112 25.265C29.0214 23.3468 28.541 21.4578 27.6155 19.7776C26.6901 18.0974 25.3504 16.6817 23.7237 15.665Z"
            fill="#222222"
          />
        </svg>
      );
    case "location":
      return (
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.6716 6.46378C20.6825 4.47466 17.9846 3.35718 15.1716 3.35718C12.3585 3.35718 9.6607 4.47466 7.67157 6.46378C5.68245 8.4529 4.56497 11.1507 4.56497 13.9638C4.56497 16.7768 5.68245 19.4747 7.67157 21.4638L14.2591 28.0638C14.3753 28.1809 14.5135 28.2739 14.6659 28.3374C14.8182 28.4009 14.9816 28.4335 15.1466 28.4335C15.3116 28.4335 15.475 28.4009 15.6273 28.3374C15.7796 28.2739 15.9179 28.1809 16.0341 28.0638L22.6716 21.4013C24.6524 19.4204 25.7652 16.7338 25.7652 13.9325C25.7652 11.1312 24.6524 8.44463 22.6716 6.46378ZM20.8841 19.6138L15.1716 25.3513L9.45907 19.6138C8.3305 18.4842 7.56217 17.0453 7.25119 15.4791C6.94022 13.9129 7.10056 12.2897 7.71195 10.8146C8.32335 9.33955 9.35835 8.07884 10.6861 7.19188C12.0139 6.30491 13.5748 5.83151 15.1716 5.83151C16.7683 5.83151 18.3293 6.30491 19.657 7.19188C20.9848 8.07884 22.0198 9.33955 22.6312 10.8146C23.2426 12.2897 23.4029 13.9129 23.092 15.4791C22.781 17.0453 22.0126 18.4842 20.8841 19.6138ZM11.4216 10.1263C10.4125 11.1385 9.84582 12.5095 9.84582 13.9388C9.84582 15.3681 10.4125 16.7391 11.4216 17.7513C12.1713 18.5023 13.1261 19.0151 14.1661 19.2255C15.2062 19.4359 16.2853 19.3345 17.2679 18.934C18.2506 18.5334 19.0931 17.8516 19.6897 16.9741C20.2863 16.0966 20.6105 15.0624 20.6216 14.0013C20.6272 13.2928 20.4907 12.5904 20.2202 11.9355C19.9497 11.2807 19.5506 10.6867 19.0466 10.1888C18.5512 9.682 17.9604 9.2782 17.3084 9.00061C16.6563 8.72302 15.9558 8.57712 15.2471 8.57132C14.5384 8.56551 13.8356 8.6999 13.179 8.96676C12.5225 9.23363 11.9252 9.62769 11.4216 10.1263ZM17.2841 15.9763C16.8104 16.4572 16.1843 16.7587 15.513 16.8291C14.8416 16.8995 14.1667 16.7346 13.6035 16.3624C13.0403 15.9903 12.6238 15.4341 12.4253 14.7889C12.2268 14.1437 12.2586 13.4496 12.5153 12.8252C12.7719 12.2009 13.2374 11.685 13.8323 11.3659C14.4272 11.0469 15.1144 10.9443 15.7765 11.0758C16.4386 11.2073 17.0345 11.5647 17.4622 12.0869C17.89 12.6092 18.123 13.2637 18.1216 13.9388C18.1034 14.7104 17.7797 15.4432 17.2216 15.9763H17.2841Z"
            fill="#222222"
          />
        </svg>
      );
    case "currency":
      return (
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.726 14.6138C7.47877 14.6138 7.2371 14.6871 7.03154 14.8244C6.82597 14.9618 6.66576 15.157 6.57115 15.3854C6.47654 15.6138 6.45178 15.8652 6.50002 16.1076C6.54825 16.3501 6.6673 16.5728 6.84211 16.7477C7.01693 16.9225 7.23966 17.0415 7.48213 17.0898C7.72461 17.138 7.97594 17.1132 8.20435 17.0186C8.43276 16.924 8.62798 16.7638 8.76534 16.5582C8.90269 16.3527 8.976 16.111 8.976 15.8638C8.976 15.5322 8.8443 15.2143 8.60988 14.9799C8.37546 14.7455 8.05752 14.6138 7.726 14.6138ZM22.726 14.6138C22.4788 14.6138 22.2371 14.6871 22.0315 14.8244C21.826 14.9618 21.6658 15.157 21.5711 15.3854C21.4765 15.6138 21.4518 15.8652 21.5 16.1076C21.5482 16.3501 21.6673 16.5728 21.8421 16.7477C22.0169 16.9225 22.2397 17.0415 22.4821 17.0898C22.7246 17.138 22.9759 17.1132 23.2044 17.0186C23.4328 16.924 23.628 16.7638 23.7653 16.5582C23.9027 16.3527 23.976 16.111 23.976 15.8638C23.976 15.5322 23.8443 15.2143 23.6099 14.9799C23.3755 14.7455 23.0575 14.6138 22.726 14.6138ZM25.226 7.11377H5.226C4.23144 7.11377 3.27761 7.50886 2.57435 8.21212C1.87109 8.91538 1.476 9.86921 1.476 10.8638V20.8638C1.476 21.8583 1.87109 22.8122 2.57435 23.5154C3.27761 24.2187 4.23144 24.6138 5.226 24.6138H25.226C26.2206 24.6138 27.1744 24.2187 27.8776 23.5154C28.5809 22.8122 28.976 21.8583 28.976 20.8638V10.8638C28.976 9.86921 28.5809 8.91538 27.8776 8.21212C27.1744 7.50886 26.2206 7.11377 25.226 7.11377ZM26.476 20.8638C26.476 21.1953 26.3443 21.5132 26.1099 21.7477C25.8755 21.9821 25.5575 22.1138 25.226 22.1138H5.226C4.89448 22.1138 4.57653 21.9821 4.34211 21.7477C4.10769 21.5132 3.976 21.1953 3.976 20.8638V10.8638C3.976 10.5322 4.10769 10.2143 4.34211 9.97989C4.57653 9.74547 4.89448 9.61377 5.226 9.61377H25.226C25.5575 9.61377 25.8755 9.74547 26.1099 9.97989C26.3443 10.2143 26.476 10.5322 26.476 10.8638V20.8638ZM15.226 12.1138C14.4843 12.1138 13.7593 12.3337 13.1426 12.7458C12.5259 13.1578 12.0453 13.7435 11.7614 14.4287C11.4776 15.1139 11.4034 15.8679 11.5481 16.5954C11.6927 17.3228 12.0499 17.991 12.5743 18.5154C13.0988 19.0399 13.767 19.397 14.4944 19.5417C15.2218 19.6864 15.9758 19.6121 16.6611 19.3283C17.3463 19.0445 17.932 18.5638 18.344 17.9472C18.7561 17.3305 18.976 16.6055 18.976 15.8638C18.976 14.8692 18.5809 13.9154 17.8776 13.2121C17.1744 12.5089 16.2206 12.1138 15.226 12.1138ZM15.226 17.1138C14.9788 17.1138 14.7371 17.0405 14.5315 16.9031C14.326 16.7658 14.1658 16.5705 14.0711 16.3421C13.9765 16.1137 13.9518 15.8624 14 15.6199C14.0482 15.3774 14.1673 15.1547 14.3421 14.9799C14.5169 14.8051 14.7397 14.686 14.9821 14.6378C15.2246 14.5896 15.4759 14.6143 15.7044 14.7089C15.9328 14.8035 16.128 14.9637 16.2653 15.1693C16.4027 15.3749 16.476 15.6165 16.476 15.8638C16.476 16.1953 16.3443 16.5132 16.1099 16.7477C15.8755 16.9821 15.5575 17.1138 15.226 17.1138Z"
            fill="#222222"
          />
        </svg>
      );
    case "climate":
      return (
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.448 19.9901V14.0151C16.448 13.6836 16.3163 13.3656 16.0819 13.1312C15.8475 12.8968 15.5295 12.7651 15.198 12.7651C14.8665 12.7651 14.5485 12.8968 14.3141 13.1312C14.0797 13.3656 13.948 13.6836 13.948 14.0151V19.9901C13.5702 20.2082 13.256 20.5214 13.0367 20.8986C12.8174 21.2758 12.7006 21.7038 12.698 22.1401C12.698 22.8031 12.9614 23.439 13.4302 23.9078C13.8991 24.3767 14.535 24.6401 15.198 24.6401C15.861 24.6401 16.4969 24.3767 16.9658 23.9078C17.4346 23.439 17.698 22.8031 17.698 22.1401C17.6954 21.7038 17.5786 21.2758 17.3593 20.8986C17.14 20.5214 16.8258 20.2082 16.448 19.9901ZM20.823 17.1401V7.76508C20.823 6.27323 20.2304 4.84249 19.1755 3.7876C18.1206 2.73271 16.6898 2.14008 15.198 2.14008C13.7062 2.14008 12.2754 2.73271 11.2205 3.7876C10.1656 4.84249 9.573 6.27323 9.573 7.76508V17.1401C8.70906 18.1191 8.11566 19.3067 7.85152 20.5854C7.58737 21.8641 7.66163 23.1896 8.06695 24.4308C8.47226 25.672 9.19459 26.7859 10.1625 27.6622C11.1304 28.5386 12.3103 29.1471 13.5855 29.4276C14.1152 29.5483 14.6551 29.6195 15.198 29.6401C16.6488 29.6468 18.0704 29.2327 19.2905 28.4478C20.5107 27.6628 21.477 26.5409 22.0723 25.2179C22.6677 23.8949 22.8665 22.4276 22.6448 20.9938C22.423 19.5601 21.7902 18.2214 20.823 17.1401ZM18.323 25.9776C17.3284 26.8594 16.0243 27.3101 14.6975 27.2304C13.3707 27.1507 12.1298 26.5471 11.248 25.5526C10.3662 24.558 9.91552 23.2539 9.99522 21.9271C10.0749 20.6002 10.6784 19.3594 11.673 18.4776C11.7911 18.3618 11.8851 18.2238 11.9494 18.0714C12.0138 17.9191 12.0473 17.7555 12.048 17.5901V7.76508C12.048 6.93627 12.3772 6.14142 12.9633 5.55537C13.5493 4.96932 14.3442 4.64008 15.173 4.64008C16.0018 4.64008 16.7967 4.96932 17.3827 5.55537C17.9688 6.14142 18.298 6.93627 18.298 7.76508V17.6901C18.2987 17.8555 18.3322 18.0191 18.3966 18.1714C18.4609 18.3238 18.5549 18.4618 18.673 18.5776C19.1839 19.0712 19.5838 19.668 19.846 20.3282C20.1082 20.9885 20.2267 21.6971 20.1936 22.4067C20.1605 23.1164 19.9765 23.8108 19.654 24.4438C19.3314 25.0767 18.8777 25.6337 18.323 26.0776V25.9776Z"
            fill="#222222"
          />
        </svg>
      );

    default:
      return (
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6737 16.165C16.3406 15.5877 16.8756 14.8736 17.2423 14.0713C17.6089 13.269 17.7987 12.3972 17.7987 11.515C17.7987 9.85741 17.1402 8.2677 15.9681 7.0956C14.796 5.9235 13.2063 5.26501 11.5487 5.26501C9.89107 5.26501 8.30136 5.9235 7.12926 7.0956C5.95716 8.2677 5.29868 9.85741 5.29868 11.515C5.29867 12.3972 5.48843 13.269 5.85508 14.0713C6.22174 14.8736 6.7567 15.5877 7.42368 16.165C5.67385 16.9574 4.18926 18.2369 3.1474 19.8507C2.10554 21.4645 1.55052 23.3442 1.54868 25.265C1.54868 25.5965 1.68037 25.9145 1.91479 26.1489C2.14921 26.3833 2.46715 26.515 2.79868 26.515C3.1302 26.515 3.44814 26.3833 3.68256 26.1489C3.91698 25.9145 4.04868 25.5965 4.04868 25.265C4.04868 23.2759 4.83885 21.3682 6.24537 19.9617C7.6519 18.5552 9.55955 17.765 11.5487 17.765C13.5378 17.765 15.4455 18.5552 16.852 19.9617C18.2585 21.3682 19.0487 23.2759 19.0487 25.265C19.0487 25.5965 19.1804 25.9145 19.4148 26.1489C19.6492 26.3833 19.9672 26.515 20.2987 26.515C20.6302 26.515 20.9481 26.3833 21.1826 26.1489C21.417 25.9145 21.5487 25.5965 21.5487 25.265C21.5468 23.3442 20.9918 21.4645 19.95 19.8507C18.9081 18.2369 17.4235 16.9574 15.6737 16.165ZM11.5487 15.265C10.807 15.265 10.082 15.0451 9.46529 14.633C8.8486 14.221 8.36796 13.6353 8.08413 12.9501C7.8003 12.2649 7.72604 11.5109 7.87073 10.7834C8.01543 10.056 8.37258 9.38781 8.89703 8.86336C9.42147 8.33892 10.0897 7.98176 10.8171 7.83707C11.5445 7.69238 12.2985 7.76664 12.9837 8.05047C13.669 8.3343 14.2546 8.81494 14.6667 9.43163C15.0787 10.0483 15.2987 10.7733 15.2987 11.515C15.2987 12.5096 14.9036 13.4634 14.2003 14.1667C13.4971 14.8699 12.5432 15.265 11.5487 15.265ZM23.7237 15.665C24.5236 14.7642 25.0462 13.6513 25.2284 12.4604C25.4107 11.2695 25.2448 10.0514 24.7509 8.95251C24.2569 7.85367 23.4559 6.92101 22.4443 6.26679C21.4326 5.61258 20.2534 5.26469 19.0487 5.26501C18.7172 5.26501 18.3992 5.39671 18.1648 5.63113C17.9304 5.86555 17.7987 6.18349 17.7987 6.51501C17.7987 6.84654 17.9304 7.16448 18.1648 7.3989C18.3992 7.63332 18.7172 7.76501 19.0487 7.76501C20.0432 7.76501 20.9971 8.1601 21.7003 8.86336C22.4036 9.56663 22.7987 10.5205 22.7987 11.515C22.7969 12.1716 22.6228 12.8161 22.2938 13.3843C21.9647 13.9524 21.4923 14.4242 20.9237 14.7525C20.7383 14.8594 20.5836 15.0121 20.4741 15.1959C20.3647 15.3798 20.3043 15.5886 20.2987 15.8025C20.2934 16.0147 20.3423 16.2248 20.4408 16.4128C20.5392 16.6009 20.6839 16.7608 20.8612 16.8775L21.3487 17.2025L21.5112 17.29C23.0179 18.0047 24.2891 19.135 25.1749 20.5479C26.0607 21.9608 26.5244 23.5974 26.5112 25.265C26.5112 25.5965 26.6429 25.9145 26.8773 26.1489C27.1117 26.3833 27.4297 26.515 27.7612 26.515C28.0927 26.515 28.4106 26.3833 28.6451 26.1489C28.8795 25.9145 29.0112 25.5965 29.0112 25.265C29.0214 23.3468 28.541 21.4578 27.6155 19.7776C26.6901 18.0974 25.3504 16.6817 23.7237 15.665Z"
            fill="#222222"
          />
        </svg>
      );
  }
}