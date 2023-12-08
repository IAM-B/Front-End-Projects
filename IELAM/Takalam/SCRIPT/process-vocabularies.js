// Function to create HTML span elements for the vocabulary section
let buttonModalCounter = 1;
function createVocabularySection(vocabulary) {
  const vocabDiv = document.createElement("div");
  vocabDiv.classList.add("vocabulary");

  const label = document.createElement("label");
  label.classList.add("vocab-en");
  label.textContent = vocabulary.en;
  vocabDiv.appendChild(label);

  const inlineVocabDiv = document.createElement("div");
  inlineVocabDiv.classList.add("inline-vocabulary");

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");
  contentDiv.appendChild(buttonsDiv);
  inlineVocabDiv.appendChild(contentDiv);

  const buttonModalDiv = document.createElement("div");
  buttonModalDiv.id = `buttonModal${buttonModalCounter}`;
  buttonModalDiv.classList.add("buttonModal");
  buttonModalDiv.innerHTML = `<svg id="dialog" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M381.663 295.062L381.667 295.055L381.672 295.048C381.784 294.859 381.92 294.732 382.107 294.636L382.115 294.632L382.122 294.628C382.316 294.526 382.495 294.488 382.714 294.503L382.722 294.504L398.517 295.54C398.517 295.54 398.517 295.54 398.518 295.54C398.84 295.562 399.056 295.661 399.28 295.892C406.819 303.731 419.343 322.275 425.734 337.157L425.738 337.166C425.773 337.247 425.797 337.328 425.811 337.418L425.812 337.425C425.827 337.521 425.831 337.614 425.822 337.716C425.814 337.808 425.796 337.896 425.765 337.988C425.735 338.069 425.695 338.15 425.644 338.226L425.637 338.236L425.631 338.246C425.584 338.318 425.532 338.38 425.461 338.444L425.45 338.454L425.438 338.465C425.38 338.519 425.316 338.565 425.237 338.607L425.22 338.616L425.203 338.625C425.129 338.666 425.049 338.697 424.961 338.719L425.568 341.144L424.961 338.719C424.879 338.74 424.795 338.751 424.708 338.753C424.69 338.752 424.65 338.75 424.607 338.748C424.586 338.747 424.563 338.746 424.536 338.745L399.211 337.025L399.21 337.025C399.087 337.017 398.971 336.992 398.853 336.947C398.724 336.893 398.638 336.837 398.575 336.783L398.557 336.767L398.538 336.752C398.457 336.684 398.382 336.603 398.311 336.493C398.24 336.377 398.197 336.27 398.17 336.163L398.17 336.162C395.092 323.868 387.875 306.399 381.667 296.251C381.549 296.056 381.5 295.875 381.5 295.66V295.651L381.5 295.641C381.498 295.431 381.545 295.256 381.663 295.062Z" stroke="black" stroke-width="5"/>
<path d="M403.273 286.576L403.273 286.567L403.272 286.559C403.256 286.34 403.295 286.159 403.393 285.972L403.397 285.965L403.401 285.957C403.501 285.762 403.626 285.629 403.814 285.515L403.821 285.511L417.355 277.303C417.355 277.303 417.355 277.302 417.356 277.302C417.632 277.135 417.866 277.093 418.182 277.153C428.853 279.252 449.747 287.262 463.518 295.79L463.526 295.794C463.601 295.841 463.667 295.893 463.73 295.96L463.735 295.964C463.802 296.034 463.859 296.109 463.91 296.197C463.956 296.277 463.992 296.359 464.019 296.453C464.042 296.536 464.055 296.626 464.057 296.717L464.057 296.729L464.058 296.741C464.06 296.827 464.053 296.907 464.032 297L464.028 297.016L464.025 297.031C464.009 297.108 463.982 297.183 463.941 297.263L463.933 297.28L463.924 297.297C463.887 297.373 463.839 297.445 463.78 297.512L465.668 299.152L463.78 297.512C463.724 297.577 463.663 297.634 463.592 297.686C463.577 297.695 463.543 297.716 463.506 297.739C463.489 297.75 463.469 297.763 463.447 297.777L441.713 310.891L441.713 310.892C441.606 310.956 441.498 311.001 441.375 311.033C441.239 311.062 441.136 311.065 441.053 311.057L441.029 311.055L441.006 311.053C440.9 311.045 440.792 311.021 440.671 310.972C440.546 310.917 440.449 310.854 440.366 310.782L440.366 310.781C430.794 302.474 414.864 292.301 403.958 287.548C403.75 287.456 403.606 287.335 403.483 287.159L403.477 287.152L403.472 287.144C403.35 286.973 403.288 286.802 403.273 286.576Z" stroke="black" stroke-width="5"/>
<path d="M115.159 159.992L115.154 159.999L115.15 160.006C115.029 160.19 114.889 160.311 114.698 160.401L114.691 160.404L114.683 160.408C114.485 160.502 114.305 160.533 114.086 160.509L114.079 160.508L98.3365 158.851C98.3363 158.851 98.336 158.851 98.3358 158.851C98.0147 158.817 97.803 158.709 97.5875 158.469C90.3634 150.34 78.5787 131.318 72.778 116.196L72.7745 116.187C72.7426 116.104 72.7221 116.023 72.7116 115.931L72.7108 115.925C72.6995 115.829 72.6996 115.735 72.7124 115.633C72.7239 115.542 72.7455 115.455 72.7803 115.364C72.8126 115.284 72.8566 115.205 72.9102 115.131L72.9172 115.121L72.9241 115.111C72.9736 115.042 73.0284 114.982 73.1014 114.921L73.1135 114.911L73.1254 114.9C73.1853 114.849 73.2514 114.805 73.3322 114.766L73.3493 114.758L73.3663 114.75C73.4423 114.712 73.5237 114.683 73.6116 114.665L73.1011 112.218L73.6116 114.665C73.6952 114.648 73.7791 114.64 73.8666 114.641C73.8844 114.643 73.9242 114.647 73.9672 114.65C73.9875 114.652 74.0111 114.654 74.0374 114.656L99.2753 117.371L99.2761 117.371C99.3994 117.384 99.5136 117.414 99.6305 117.463C99.7565 117.522 99.8402 117.581 99.9014 117.638L99.9189 117.654L99.9367 117.67C100.016 117.741 100.087 117.826 100.154 117.938C100.22 118.057 100.259 118.166 100.281 118.273L100.282 118.274C102.873 130.68 109.397 148.42 115.202 158.804C115.312 159.003 115.353 159.186 115.345 159.401L115.345 159.411L115.344 159.42C115.338 159.63 115.284 159.803 115.159 159.992Z" stroke="black" stroke-width="5"/>
<path d="M93.2312 167.622L93.2314 167.63L93.2317 167.638C93.2387 167.858 93.193 168.038 93.0881 168.22L93.0839 168.227L93.0797 168.235C92.9715 168.426 92.8417 168.554 92.6491 168.66L92.6424 168.664L78.7955 176.333C78.7953 176.333 78.7951 176.334 78.7948 176.334C78.5122 176.49 78.2767 176.523 77.9628 176.45C67.3828 173.933 46.82 165.107 33.396 156.044L33.3881 156.039C33.3147 155.99 33.2511 155.935 33.1901 155.866L33.1857 155.861C33.1213 155.789 33.0676 155.712 33.0199 155.621C32.9769 155.54 32.9448 155.456 32.9213 155.362C32.9019 155.278 32.8921 155.187 32.8936 155.096L32.8938 155.084L32.8939 155.072C32.8945 154.987 32.9052 154.906 32.9299 154.814L32.934 154.799L32.9379 154.784C32.9574 154.707 32.9866 154.634 33.0305 154.556L33.0399 154.539L33.0489 154.523C33.0894 154.448 33.1399 154.378 33.2013 154.313L31.3797 152.6L33.2013 154.313C33.2598 154.25 33.3238 154.195 33.3963 154.146C33.4119 154.138 33.4469 154.118 33.4842 154.097C33.5019 154.086 33.5223 154.074 33.5449 154.061L55.7778 141.812L55.7785 141.812C55.8871 141.752 55.9975 141.711 56.1218 141.684C56.2585 141.66 56.3613 141.661 56.444 141.672L56.4676 141.676L56.4913 141.678C56.5968 141.691 56.7038 141.719 56.8226 141.773C56.9449 141.833 57.0395 141.899 57.1195 141.975L57.1201 141.975C66.3575 150.653 81.875 161.444 92.5853 166.624C92.7893 166.724 92.9286 166.85 93.0447 167.03L93.0499 167.038L93.0551 167.046C93.1699 167.222 93.2253 167.395 93.2312 167.622Z" stroke="black" stroke-width="5"/>
<path d="M79.3958 300.854V303.354H81.8958H130.005C130.54 303.354 131.071 303.406 131.599 303.51C132.117 303.613 132.628 303.768 133.127 303.974C133.613 304.173 134.075 304.421 134.526 304.723L134.532 304.727L134.539 304.732C134.971 305.018 135.378 305.351 135.763 305.731C136.141 306.115 136.48 306.526 136.778 306.966C137.07 307.405 137.322 307.875 137.531 308.374C137.734 308.863 137.888 309.37 137.991 309.888C138.094 310.409 138.146 310.938 138.146 311.474V335.135V341.841L142.536 336.772L169.041 306.168C169.817 305.271 170.735 304.584 171.812 304.093C172.896 303.599 174.016 303.354 175.202 303.354C175.202 303.354 175.203 303.354 175.203 303.354L368.556 303.443H368.557C371.486 303.443 373.384 304.496 374.567 305.883C375.797 307.326 376.431 309.343 376.365 311.486C376.232 315.845 373.387 319.679 368.563 319.682L368.56 319.682L368.557 319.682L368.529 319.682L368.41 319.682L367.957 319.679L366.341 319.671C365.003 319.663 363.22 319.654 361.436 319.643C359.763 319.633 358.09 319.623 356.786 319.614V319.589H354.286H180.068H178.926L178.178 320.452L136.162 368.962C136.162 368.962 136.162 368.962 136.162 368.962C135.621 369.588 135.003 370.114 134.293 370.554C133.582 370.991 132.831 371.313 132.028 371.52C131.213 371.725 130.398 371.807 129.575 371.764C128.745 371.72 127.944 371.553 127.168 371.263L127.158 371.259C126.383 370.973 125.67 370.577 125.012 370.066L125.01 370.065C124.355 369.558 123.791 368.966 123.318 368.286C122.847 367.609 122.487 366.874 122.233 366.075C121.987 365.289 121.865 364.481 121.865 363.651V322.089V319.589H119.365H71.2552C70.7155 319.589 70.1898 319.537 69.6602 319.433C69.1416 319.33 68.6366 319.176 68.1332 318.969C67.6426 318.767 67.1747 318.518 66.7331 318.224C66.2806 317.921 65.8717 317.586 65.497 317.211L65.4876 317.202C65.1125 316.831 64.7802 316.428 64.4921 315.992L64.485 315.981L64.4777 315.97C64.1808 315.531 63.9338 315.071 63.734 314.586C63.5269 314.082 63.3727 313.577 63.2706 313.059L63.2699 313.055C63.1638 312.52 63.1094 311.996 63.1094 311.474V198.203C63.1094 195.286 64.1621 193.394 65.5533 192.214C66.9999 190.986 69.0251 190.352 71.1768 190.417C75.5596 190.55 79.3958 193.398 79.3958 198.203V300.854Z" stroke="black" stroke-width="5"/>
<path d="M130.388 131.212L131.552 131.167H423.76C424.3 131.167 424.819 131.218 425.338 131.324L425.346 131.326L425.355 131.328C425.886 131.432 426.384 131.582 426.867 131.785L426.874 131.788L426.882 131.791C427.374 131.993 427.843 132.244 428.285 132.538L428.294 132.544C428.729 132.832 429.136 133.167 429.519 133.549L429.528 133.558C429.903 133.93 430.235 134.333 430.524 134.769L430.531 134.78L430.538 134.79C430.835 135.23 431.082 135.689 431.282 136.175C431.489 136.678 431.643 137.183 431.745 137.702L431.746 137.705C431.849 138.228 431.901 138.752 431.901 139.286V256.766C431.901 259.683 430.848 261.574 429.458 262.755C428.012 263.982 425.988 264.616 423.837 264.55C419.455 264.416 415.62 261.568 415.62 256.766V149.906V147.407L413.12 147.406L130.334 147.365C127.591 147.267 125.796 146.218 124.667 144.85C123.491 143.425 122.886 141.46 122.947 139.378C123.071 135.136 125.794 131.389 130.388 131.212Z" stroke="black" stroke-width="5"/>
<path d="M135.476 218.087C135.953 217.889 136.447 217.739 136.959 217.635C137.478 217.535 137.992 217.484 138.505 217.484H364.745C365.258 217.484 365.772 217.535 366.291 217.635C366.803 217.739 367.296 217.889 367.774 218.087L367.781 218.089C368.252 218.282 368.706 218.525 369.147 218.816C369.575 219.104 369.975 219.432 370.347 219.799C370.714 220.167 371.041 220.565 371.329 220.995C371.614 221.421 371.855 221.873 372.054 222.356L372.057 222.364L372.061 222.372C372.259 222.843 372.407 223.329 372.505 223.828L372.506 223.836L372.508 223.843C372.61 224.353 372.661 224.865 372.661 225.38C372.661 225.894 372.611 226.399 372.508 226.909C372.402 227.433 372.255 227.923 372.061 228.383L372.057 228.391L372.054 228.399C371.859 228.871 371.615 229.325 371.324 229.76C371.03 230.198 370.708 230.595 370.347 230.956C369.973 231.325 369.571 231.655 369.14 231.944C368.719 232.226 368.262 232.467 367.774 232.669C367.297 232.866 366.803 233.017 366.291 233.12C365.772 233.22 365.258 233.271 364.745 233.271H138.505C137.992 233.271 137.478 233.22 136.959 233.12C136.447 233.017 135.953 232.866 135.476 232.669C134.988 232.467 134.531 232.226 134.11 231.944C133.679 231.655 133.277 231.326 132.904 230.957C132.538 230.59 132.212 230.194 131.925 229.766C131.634 229.325 131.39 228.869 131.196 228.399L131.193 228.391L131.189 228.383C130.991 227.912 130.843 227.426 130.745 226.927L130.744 226.92L130.742 226.912C130.658 226.495 130.609 226.082 130.594 225.665V225.38C130.594 224.868 130.644 224.354 130.744 223.836C130.848 223.328 130.998 222.834 131.196 222.356C131.391 221.884 131.635 221.431 131.926 220.995L131.926 220.995C132.22 220.557 132.543 220.16 132.904 219.799C133.275 219.431 133.675 219.103 134.103 218.816C134.54 218.528 135 218.283 135.476 218.087ZM135.476 218.087L134.521 215.776M135.476 218.087L134.521 215.776M134.521 215.776C133.891 216.036 133.286 216.359 132.719 216.734L366.776 215.182C366.104 215.052 365.427 214.984 364.745 214.984H138.505C137.823 214.984 137.146 215.052 136.474 215.182C135.802 215.318 135.151 215.516 134.521 215.776Z" stroke="black" stroke-width="5"/>
<path d="M135.476 248.404C135.953 248.207 136.447 248.056 136.959 247.953C137.478 247.853 137.992 247.802 138.505 247.802H364.745C365.258 247.802 365.772 247.853 366.291 247.953C366.803 248.056 367.297 248.207 367.774 248.404L367.781 248.407C368.252 248.6 368.706 248.843 369.147 249.134C369.576 249.422 369.974 249.749 370.342 250.117L370.351 250.126C370.713 250.485 371.039 250.881 371.329 251.313C371.614 251.739 371.855 252.191 372.054 252.674L372.057 252.682L372.061 252.69C372.259 253.161 372.407 253.647 372.505 254.146L372.506 254.153L372.508 254.161C372.61 254.671 372.661 255.182 372.661 255.698C372.661 256.211 372.611 256.717 372.508 257.227C372.402 257.751 372.255 258.241 372.061 258.701L372.057 258.709L372.054 258.717C371.859 259.189 371.615 259.642 371.324 260.078L371.319 260.084L371.315 260.091C371.037 260.511 370.715 260.905 370.347 261.273C369.973 261.643 369.571 261.973 369.14 262.261C368.719 262.543 368.262 262.785 367.774 262.986C367.297 263.184 366.803 263.334 366.291 263.438C365.772 263.538 365.258 263.589 364.745 263.589H138.505C137.992 263.589 137.478 263.538 136.959 263.438C136.447 263.334 135.953 263.184 135.476 262.986C134.988 262.785 134.531 262.543 134.11 262.261C133.679 261.973 133.277 261.643 132.904 261.274C132.538 260.908 132.212 260.512 131.925 260.084C131.634 259.643 131.39 259.187 131.196 258.717L131.193 258.709L131.189 258.701C130.989 258.227 130.843 257.747 130.746 257.248L130.744 257.237L130.742 257.226C130.658 256.817 130.609 256.402 130.594 255.983V255.698C130.594 255.186 130.644 254.672 130.744 254.153C130.848 253.646 130.998 253.151 131.196 252.674C131.391 252.202 131.635 251.748 131.926 251.313L129.849 249.922L131.926 251.313C132.221 250.872 132.543 250.478 132.899 250.126L132.899 250.126L132.908 250.117C133.276 249.749 133.674 249.422 134.103 249.134C134.54 248.846 135 248.601 135.476 248.404ZM135.476 248.404L134.521 246.094M135.476 248.404L134.521 246.094M134.521 246.094C133.891 246.354 133.286 246.677 132.719 247.052L366.776 245.5C366.104 245.37 365.427 245.302 364.745 245.302H138.505C137.823 245.302 137.146 245.37 136.474 245.5C135.802 245.635 135.151 245.833 134.521 246.094Z" stroke="black" stroke-width="5"/>
<path d="M130.742 196.591C130.658 196.182 130.609 195.767 130.594 195.347V195.063C130.594 194.549 130.644 194.034 130.744 193.523C130.848 193.011 130.998 192.517 131.196 192.038C131.391 191.566 131.635 191.113 131.926 190.678L131.926 190.678C132.221 190.237 132.543 189.842 132.899 189.491L132.899 189.491L132.908 189.481C133.278 189.111 133.674 188.787 134.097 188.508L134.103 188.503L134.11 188.499C134.54 188.211 134.998 187.966 135.476 187.769C135.956 187.57 136.447 187.421 136.95 187.324L136.959 187.322L136.968 187.321C137.478 187.218 137.99 187.167 138.505 187.167H364.745C365.26 187.167 365.772 187.218 366.282 187.321L366.291 187.322L366.3 187.324C366.803 187.421 367.294 187.57 367.774 187.769L367.781 187.772C368.254 187.965 368.705 188.208 369.14 188.499L369.147 188.503L369.153 188.508C369.576 188.787 369.972 189.111 370.342 189.481L370.351 189.491C370.713 189.849 371.039 190.245 371.329 190.678C371.614 191.104 371.855 191.556 372.054 192.038L372.057 192.046L372.061 192.054C372.259 192.525 372.407 193.01 372.504 193.512L372.506 193.523L372.508 193.534C372.61 194.036 372.661 194.546 372.661 195.063C372.661 195.579 372.61 196.089 372.508 196.591L372.508 196.595C372.401 197.122 372.255 197.611 372.061 198.071L372.057 198.079L372.054 198.087C371.86 198.558 371.617 199.01 371.326 199.444C371.029 199.883 370.703 200.282 370.342 200.644C369.979 201.006 369.581 201.331 369.14 201.626C368.719 201.908 368.262 202.149 367.774 202.351L367.766 202.354L367.758 202.358C367.298 202.551 366.809 202.698 366.282 202.804C365.784 202.905 365.273 202.953 364.745 202.953H138.505C137.977 202.953 137.466 202.905 136.968 202.804L136.959 202.803L136.95 202.801C136.45 202.704 135.962 202.557 135.484 202.36C134.987 202.15 134.529 201.906 134.11 201.626C133.669 201.331 133.271 201.006 132.908 200.644C132.535 200.27 132.209 199.877 131.925 199.454C131.634 199.013 131.39 198.557 131.196 198.087L131.193 198.079L131.189 198.071C130.991 197.6 130.843 197.115 130.746 196.613L130.744 196.602L130.742 196.591Z" stroke="black" stroke-width="5"/>
</svg>
`;

  for (let j = 0; j < vocabulary.ar.length; j++) {
    const span = document.createElement("span");
    span.classList.add("vocab-ar");
    span.setAttribute("translate", "no");
    span.textContent = vocabulary.ar[j];

    if (vocabulary.ar[j] === "/" || vocabulary.ar[j] === "x") {
    span.classList.remove("vocab-ar");
    span.classList.add("vocab-en");
      span.classList.add("or");
    } else if (vocabulary.ar[j] === "ج") {
      buttonModalDiv.style.display = "none";
      span.classList.remove("vocab-en");
      span.classList.add("vocab-ar-and");
    }

    buttonsDiv.appendChild(span);
  }

  buttonsDiv.appendChild(buttonModalDiv);

  vocabDiv.appendChild(inlineVocabDiv);

  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal-container");

  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal-background");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const jointGroup = [];
  let currentGroup = [];

  vocabulary.ar.forEach((word) => {
    if (word) {
      currentGroup.push(word);
    }
  });

  if (currentGroup.length > 0) {
    jointGroup.push(currentGroup.join(" "));
  }

  let validIndex = 0;

  for (let j = jointGroup.length - 1; j >= 0; j--) {
    const arElement = jointGroup[j];
    const h1 = document.createElement("h1");
    h1.classList.add("h1-modal");
    h1.setAttribute("translate", "no");

    if (/[x]/.test(arElement)) {
      continue;
    } else {
      h1.textContent = jointGroup;
    }

    const h2 = document.createElement("h2");
    h2.classList.add("meaning");
    h2.setAttribute("translate", "no");
    h2.textContent = vocabulary.meaning[validIndex];

    const h3 = document.createElement("h3");
    h3.classList.add("translation");
    h3.textContent = vocabulary.translation[validIndex];

    modal.appendChild(h1);
    modal.appendChild(h2);
    modal.appendChild(h3);

    validIndex++;
  }
  for (let j = currentGroup.length - 1; j >= 0; j--) {
    const arElement = currentGroup[j];
    if (currentGroup.includes("x")) {
      if (/[x]/.test(arElement)) {
        continue;
      }
      const h1 = document.createElement("h1");
      h1.classList.add("h1-modal");
      h1.setAttribute("translate", "no");
      h1.textContent = arElement;

      const h2 = document.createElement("h2");
      h2.classList.add("meaning");
      h2.setAttribute("translate", "no");
      h2.textContent = vocabulary.meaning[validIndex];

      const h3 = document.createElement("h3");
      h3.classList.add("translation");
      h3.textContent = vocabulary.translation[validIndex];

      modal.appendChild(h1);
      modal.appendChild(h2);
      modal.appendChild(h3);

      validIndex++;
    }
  }

  modalBackground.appendChild(modal);
  modalContainer.appendChild(modalBackground);

  vocabDiv.appendChild(modalContainer);

  buttonModalCounter++;

  const buttons = vocabDiv.querySelectorAll(".buttonModal");
  buttons.forEach((modal) => {
    modal.addEventListener("click", function () {
      const buttonId = this.getAttribute("id");
      const modalContainer =
        this.closest(".vocabulary").querySelector(".modal-container");
      modalContainer.classList.remove("out");
      modalContainer.classList.add(buttonId, "one");
      document.body.classList.add("modal-active");
    });
  });

  modalContainer.addEventListener("click", function () {
    this.classList.add("out");
    document.body.classList.remove("modal-active");
  });

  return vocabDiv;
}

// Function to generate HTML elements for all vocabulary sections
function generateVocabularies(vocabularies, ticketListe) {
  const exoForm = document.getElementById("vocab");
  const ticketElements = document.querySelectorAll(".ticket");

  ticketElements.forEach((ticketElement) => {
    ticketElement.textContent = ticketListe;
  });

  for (let i = 0; i < vocabularies.length; i++) {
    const vocabSection = createVocabularySection(vocabularies[i]);
    exoForm.appendChild(vocabSection);
  }
  createBtnExercice();
}

// Function to generated the boutton for exercice display
function createBtnExercice() {
  const exoForm = document.getElementById("vocab");
  const exerciceBTN = document.createElement("button");
  exerciceBTN.classList.add("btn-vocab");
  exerciceBTN.setAttribute("type", "button");
  exerciceBTN.innerHTML = "EXERCICES";

  exerciceBTN.addEventListener("click", function () {
    showExerciseSection();
  });
  exoForm.appendChild(exerciceBTN);
}

// Function to create HTML input elements for the exercise section
let counter = -1;
function processVocabularies(vocabularies) {
  vocabularies.forEach((vocab) => {
    const vocabularyDiv = document.createElement("div");
    vocabularyDiv.classList.add("vocabulary");

    const vocabLabel = document.createElement("label");
    vocabLabel.classList.add("vocab-en");
    vocabLabel.textContent = vocab.en;

    const inputDiv = document.createElement("div");
    inputDiv.classList.add("inline-input");

    vocab.ar.reverse().forEach((word, i) => {
      if (word !== "ج" && word !== "/" && word !== "x") {
        const vocabInput = document.createElement("input");
        vocabInput.setAttribute("type", "search");
        vocabInput.setAttribute("translate", "no");
        vocabInput.setAttribute("required", "");
        vocabInput.classList.add("input-fill");
        vocabInput.setAttribute("autocomplete", "off");
        vocabInput.setAttribute("inputmode", "none");

        vocabInput.setAttribute("id", `input-${counter}`);
        counter++;
        attachKeyboardEvents(vocabInput);

        if (
          i > 0 &&
          (vocab.ar[i - 1] === "ج" ||
            vocab.ar[i - 1] === "/" ||
            vocab.ar[i - 1] === "x")
        ) {
          if (vocab.ar[i - 1] === "ج") {
            vocabInput.setAttribute("placeholder", `جمع...`);
            console.log(`input-${counter} correspond à : جمع/... ${word}`);
          } else if (vocab.ar[i - 1] === "/") {
            vocabInput.setAttribute("placeholder", `أو...`);
            console.log(`input-${counter} correspond à : أو... ${word}`);
          } else if (vocab.ar[i - 1] === "x") {
            vocabInput.setAttribute("placeholder", `عكس...`);
            console.log(`input-${counter} correspond à : عكس... ${word}`);
          } else {
            vocabInput.setAttribute("placeholder", `${vocab.ar[i - 1]}...`);
            console.log(
              `input-${counter} correspond à : ${word} ...${vocab.ar[i - 1]}`
            );
          }
        } else {
          vocabInput.setAttribute("placeholder", "...");
          console.log(`input-${counter} correspond à : ${word} ...`);
        }

        vocabInput.setAttribute("id", `${counter}`);
        inputDiv.insertBefore(vocabInput, inputDiv.firstChild);
      }
    });
    vocabularyDiv.appendChild(vocabLabel);
    vocabularyDiv.appendChild(inputDiv);
    document.querySelector("#exo").appendChild(vocabularyDiv);
    setTimeout(() => {
      createBtn(vocabularies);
    }, 500);
  });
}

// Function to create buttons
function createBtn(vocabularies) {
  const exerciceWrapperDiv = document.querySelector(".exercices-fieldset");
  const existingBtnContainer = document.querySelector(".correction");

  if (existingBtnContainer) {
    exerciceWrapperDiv.removeChild(existingBtnContainer);
  }

  const btnContainer = document.createElement("div");
  btnContainer.classList.add("correction");

  const btnSubmit = document.createElement("button");
  btnSubmit.classList.add("btn-exo", "submit");
  btnSubmit.innerHTML = "SUBMIT";
  btnSubmit.onclick = function () {
    btnCheck.classList.remove("hidden");
    vocab(vocabularies);
  };

  const btnCheck = document.createElement("button");
  btnCheck.innerHTML = "CHECK";
  btnCheck.classList.add("hidden", "btn-exo", "correct-answer");
  btnCheck.onclick = function () {
    btnCheck.classList.add("hidden");
    btnSubmit.classList.add("hidden");
    btnRestart.classList.remove("hidden");
    showCorrections(vocabularies);
  };

  const btnRestart = document.createElement("button");
  btnRestart.innerHTML = "RETRY";
  btnRestart.classList.add("hidden", "btn-exo", "reset");
  btnRestart.onclick = function () {
    btnCheck.classList.add("hidden");
    btnRestart.classList.add("hidden");
    btnSubmit.classList.remove("hidden");
    resetForm();
    showVocabularySection();
  };

  btnContainer.appendChild(btnSubmit);
  btnContainer.appendChild(btnCheck);
  btnContainer.appendChild(btnRestart);
  exerciceWrapperDiv.appendChild(btnContainer);
}

// Function click outside modal
document.addEventListener("click", function (event) {
  const outsideBtn = event.target.closest(".outside-btn");
  if (outsideBtn) {
    const modalContainer = outsideBtn.closest(".modal-container");
    if (modalContainer) {
      modalContainer.classList.add("out");
    }
  }
});

// Function that checks the answers
const vocab = (vocabularies) => {
  const results = [];
  for (let i = 0; i <= counter; i++) {
    results.push(document.getElementById(i).value.toUpperCase());
  }
  const ChampTxt = document.getElementById("Aff");
  ChampTxt.style.display = "block";

  let score = 0;
  let isCorrect = false;
  let allAnswersProvided = true;

  const goodRep1 = [];
  const goodRep2 = [];

  const removeHarakat = (text) => {
    return text.replace(/[ًٌٍَُِّْ\s]/g, "");
  };

  // Helper function to process Arabic vocabulary
  const processArabicVocabulary = (arVocabulary) => {
    return arVocabulary
      .filter((word) => !["/", "ج", "x"].includes(word))
      .map((word) => removeHarakat(word));
  };

  for (let i = 0; i < vocabularies.length; i++) {
    const arVocabulary = vocabularies[i].ar;
    goodRep1.push(...processArabicVocabulary(arVocabulary));
    goodRep2.push(
      ...arVocabulary
        .map((word) => word.replace(/؟/g, ""))
        .filter((word) => !["/", "ج", "x"].includes(word))
    );
  }

  const n = goodRep1.length;

  for (let i = 0; i < results.length; i++) {
    const inputElement = document.getElementById(i);
    if (!results[i]) {
      allAnswersProvided = false;
    } else {
      const normalizedResult = results[i].replace(/[؟\s]/g, "");
      const normalizedGoodRep1 = goodRep1[i].replace(/[؟\s]/g, "");
      const normalizedGoodRep2 = goodRep2[i].replace(/[؟\s]/g, "");

      const correctHarakat = normalizedResult === normalizedGoodRep2;
      const correctWithoutHarakat = normalizedResult === normalizedGoodRep1;
      const resultWithoutHarakat = removeHarakat(normalizedResult);
      const errorWithoutHarakat = resultWithoutHarakat === normalizedGoodRep1;

      if (correctHarakat || correctWithoutHarakat) {
        score++;
        isCorrect = true;
        inputElement.classList.add("correct-answer", "correct");
        inputElement.classList.remove("error", "error-harakat");
      } else if (errorWithoutHarakat) {
        isCorrect = false;
        inputElement.classList.add("error-harakat", "error");
        inputElement.classList.remove("correct-answer", "kalam", "correct");
      } else {
        isCorrect = false;
        inputElement.classList.add("kalam", "error");
        inputElement.classList.remove("correct-answer", "correct", "error-harakat");
      }

      if (!isCorrect) {
        const section = document.querySelector("#main-section");
        const offset = section.offsetTop;
        window.scrollTo({ top: offset, behavior: "smooth" });
        ChampTxt.innerHTML = `<div class="modal-container one">
            <div class="modal-background">
              <div class="modal">
                <div class="outside-modal">
                  <button class="outside-btn">
                  <i class="fi fi-br-cross"></i>
                  </button>
                </div>
                <h1 class="h1-modal" translate="no">اللَّه يَسَهِّلُ لَك</h1>
                <h3 class="translation">Correct the wrong answers in red and try again.</h3>
              </div>
            </div>
          </div>`;
      }
    }
  }

  if (allAnswersProvided) {
    const section = document.querySelector("#main-section");
    const offset = section.offsetTop;
    window.scrollTo({ top: offset, behavior: "smooth" });

    if (score === n) {
      ChampTxt.innerHTML = `<div class="modal-container one">
          <div class="modal-background">
            <div class="modal">
              <div class="outside-modal">
                <button class="outside-btn">
                <i class="fi fi-br-cross"></i>
                </button>
              </div>
              <h1 class="h1-modal" translate="no">اللَّه بَارِك</h1>
              <h3 class="translation">All answers are correct.</h3>
            </div>
          </div>
        </div>`;
      goToNextExercise();
    } else {
      ChampTxt.innerHTML = `<div class="modal-container one">
          <div class="modal-background">
            <div class="modal">
             <div class="outside-modal">
               <button class="outside-btn">
               <i class="fi fi-br-cross"></i>
               </button>
              </div>
              <h1 class="h1-modal" translate="no">اللَّه يَسَهِّلُ لَك</h1>
              <h3 class="translation">Correct the errors in red and try again.</h3>
            </div>
          </div>
        </div>`;
    }
  } else {
    console.log("allAnswersProvided is false.");
  }
};

// Function that displays the corrections
const showCorrections = (vocabularies) => {
  const results = [];
  for (let i = 0; i <= counter; i++) {
    results.push(document.getElementById(i).value.toUpperCase());
  }
  const section = document.querySelector("#main-section");
  const offset = section.offsetTop;
  window.scrollTo({ top: offset, behavior: "smooth" });

  const ChampTxt = document.getElementById("Aff");
  let goodRep1 = [];
  let goodRep2 = [];

  for (let i = 0; i < vocabularies.length; i++) {
    const arVocabulary = vocabularies[i].ar;
    const filteredArVocabulary1 = arVocabulary
      .filter((word) => !["/", "ج", "x"].includes(word))
      .map((word) => word.replace(/[ًٌٍَُِّ؟ْ]/g, ""));
    goodRep1 = goodRep1.concat(filteredArVocabulary1);
    const filteredArVocabulary2 = arVocabulary
      .filter((word) => !["/", "ج", "x"].includes(word))
      .map((word) => word.replace(/[؟]/g, ""));
    goodRep2 = goodRep2.concat(filteredArVocabulary2);
  }
  const corrections = [];

  for (let i = 0; i < goodRep2.length; i++) {
    corrections.push(goodRep2[i]);
  }
  console.log(`corrections=[${corrections}]`);

  const n = goodRep1.length;

  for (let i = 0; i < n; i++) {
    if (goodRep1[i] !== results[i] && goodRep2[i] !== results[i]) {
      const isCorrect = false;
      for (const correctAnswer of [goodRep1[i], goodRep2[i]]) {
        if (correctAnswer === results[i]) {
          isCorrect = true;
          break;
        }
      }
      if (!isCorrect) {
        document.getElementById(i).classList.add("show-corrections");
        document.getElementById(i).classList.remove("correct-answer", "kalam", "error-harakat");
        document.getElementById(i).value = corrections[i];
      }
    }
  }
};

// Function that resets the form
let nbAttempts = 0;
const resetForm = () => {
  const allInputs = document.querySelectorAll(".input-fill");
  allInputs.forEach((input) => {
    input.classList.remove("show-corrections", "kalam", "error-harakat", "correct-answer");
  });
  for (let i = 0; i <= counter; i++) {
    document.getElementById(i).value = "";
  }
  const affDiv = document.getElementById("Aff");
  if (affDiv) {
    affDiv.style.display = "none";
  }
};

// Function that hides the vocabulary and displays the exercise section
const showExerciseSection = () => {
  const vocabSection = document.querySelector("#vocab-section");
  const exerciseSection = document.querySelector("#exercice-section");
  const section = document.querySelector("#main-section");

  vocabSection.classList.remove("fade-in");
  vocabSection.classList.add("fade-out");
  exerciseSection.classList.remove("fade-out");
  exerciseSection.classList.add("fade-in");

  setTimeout(() => {
    vocabSection.style.display = "none";
    exerciseSection.style.display = "block";
    const offset = section.offsetTop;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }, 500);
};

// Function that hides the exercise and displays the vocabulary section
const showVocabularySection = () => {
  const vocabSection = document.querySelector("#vocab-section");
  const exerciseSection = document.querySelector("#exercice-section");
  const section = document.querySelector("#main-section");

  vocabSection.classList.remove("fade-out");
  vocabSection.classList.add("fade-in");
  exerciseSection.classList.remove("fade-in");
  exerciseSection.classList.add("fade-out");

  setTimeout(() => {
    vocabSection.style.display = "block";
    exerciseSection.style.display = "none";
    const offset = section.offsetTop;
    window.scrollTo({ top: offset, behavior: "smooth" });
  }, 500);
};
