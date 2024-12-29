import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const MemoSection: React.FC = () => {
  const [memo, setMemo] = useState("");

  return (
    <div className="mt-4 w-80">
      <Textarea
        className="h-full"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}>
      </Textarea>
    </div>
  );
};

export default MemoSection;
