export default function Page({ params }: { params: { id: string } }) {
  return (
    <>
      <h2>Product ID: {params.id}</h2>
    </>
  )
}
