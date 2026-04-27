import { Box, Drawer, Typography } from "@mui/material";
import { BlogDetailProps } from "pages/Blog/types/blog-detail";

const BlogDetail = ({ item, onClose }: BlogDetailProps) => {
  return (
    <Drawer anchor="right" open={!!item} onClose={onClose}>
      <Box sx={{ width: 350, p: 3 }}>
        {item && (
          <>
            <Typography variant="h5">{item.title}</Typography>

            <Typography sx={{ mt: 2 }}>{item.description}</Typography>

          </>
        )}
      </Box>
    </Drawer>
  )
}

export default BlogDetail;