import { useState } from "react";

const TableComponent = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(index);
        setTimeout(() => setCopied(null), 2000); // Hide message after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const rows = [
    "https://explorer.chainweb.com/mainnet/txdetail/9VwifXgMp3Qn7Fd1oKFYSESqXhZR6vSzq3qSyo1MOkY",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    "https://explorer.chainweb.com/mainnet/txdetail/_L9t0i6DmIQJQCtD8QXxO375JYj9X7kYO6oQ_lUQB5A",
    // ... (other rows)
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-full bg-white dark:!bg-gray-900 dark:!text-white">
        <thead>
          <tr>
            <th className="p-2">Chain</th>
            <th className="p-2">Link</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((url, index) => (
            <tr key={index} className="border-t dark:border-gray-700">
              <td className="p-3">{index}</td>
              <td className="p-3 break-words">
                <a href={url} className="text-black dark:!text-white">
                  {url}
                </a>
              </td>
              <td className="p-2">
                <i
                  className="bi bi-clipboard text-success cursor-pointer"
                  onClick={() => handleCopy(url, index)}
                ></i>
                {copied === index && (
                  <span className="ml-2 text-green-500">Copied!</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
