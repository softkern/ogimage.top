import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface MetaTagsDisplayProps {
  ogData: {
    [key: string]: string
  }
}

export default function MetaTagsDisplay({ ogData }: MetaTagsDisplayProps) {
  const openGraphTags = Object.entries(ogData).filter(([key]) => key.startsWith('og:'))
  const twitterTags = Object.entries(ogData).filter(([key]) => key.startsWith('twitter:'))
  const otherTags = Object.entries(ogData).filter(([key]) => !key.startsWith('og:') && !key.startsWith('twitter:'))

  const renderTable = (tags: [string, string][], title: string) => (
    <Card>
      <CardHeader>
        <CardTitle>
          <h4 className="font-semibold">{title}</h4>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Property</TableHead>
              <TableHead>Content</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tags.map(([key, value]) => (
              <TableRow key={key}>
                <TableCell className="font-medium">{key}</TableCell>
                <TableCell>{value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )

  return (
    <div className="space-y-6">
      {openGraphTags.length > 0 && renderTable(openGraphTags, "Open Graph Tags")}
      {twitterTags.length > 0 && renderTable(twitterTags, "Twitter Tags")}
      {otherTags.length > 0 && renderTable(otherTags, "Other Tags")}
    </div>
  )
}

