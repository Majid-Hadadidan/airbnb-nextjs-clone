import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbPage,BreadcrumbSeparator,BreadcrumbList } from "../ui/breadcrumb"

function BreadCrumbs({name}) {
  return (
    <Breadcrumb>
    <BreadcrumbList>
    <BreadcrumbItem>
    <BreadcrumbLink href="/">
    Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator/>
    <BreadcrumbItem>
    <BreadcrumbPage>{name}</BreadcrumbPage>
    </BreadcrumbItem>
    </BreadcrumbList>
    </Breadcrumb>
  )
}
export default BreadCrumbs