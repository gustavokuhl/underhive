export function TypographyH2({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <h2 className="scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  )
}

export function TypographySmall({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <small className="text-sm font-medium leading-none">{children}</small>
}

export function TypographyMuted({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}
